import React from 'react';
const LABEL_21739 = 'component_21739';
export function Component21739({ value = 21739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21739, 'data-value': derived.doubled }, children);
}
export default Component21739;
