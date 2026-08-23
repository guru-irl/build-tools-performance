import React from 'react';
const LABEL_42081 = 'component_42081';
export function Component42081({ value = 42081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42081, 'data-value': derived.doubled }, children);
}
export default Component42081;
