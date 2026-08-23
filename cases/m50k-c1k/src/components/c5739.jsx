import React from 'react';
const LABEL_5739 = 'component_5739';
export function Component5739({ value = 5739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5739, 'data-value': derived.doubled }, children);
}
export default Component5739;
