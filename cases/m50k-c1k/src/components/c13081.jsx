import React from 'react';
const LABEL_13081 = 'component_13081';
export function Component13081({ value = 13081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13081, 'data-value': derived.doubled }, children);
}
export default Component13081;
