import React from 'react';
const LABEL_23198 = 'component_23198';
export function Component23198({ value = 23198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23198, 'data-value': derived.doubled }, children);
}
export default Component23198;
