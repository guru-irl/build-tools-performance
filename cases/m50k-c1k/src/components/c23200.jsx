import React from 'react';
const LABEL_23200 = 'component_23200';
export function Component23200({ value = 23200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23200, 'data-value': derived.doubled }, children);
}
export default Component23200;
