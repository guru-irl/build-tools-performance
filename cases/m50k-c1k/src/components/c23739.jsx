import React from 'react';
const LABEL_23739 = 'component_23739';
export function Component23739({ value = 23739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23739, 'data-value': derived.doubled }, children);
}
export default Component23739;
