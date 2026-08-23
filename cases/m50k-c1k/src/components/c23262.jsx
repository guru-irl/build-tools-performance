import React from 'react';
const LABEL_23262 = 'component_23262';
export function Component23262({ value = 23262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23262, 'data-value': derived.doubled }, children);
}
export default Component23262;
