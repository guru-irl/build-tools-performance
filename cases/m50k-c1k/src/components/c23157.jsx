import React from 'react';
const LABEL_23157 = 'component_23157';
export function Component23157({ value = 23157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23157, 'data-value': derived.doubled }, children);
}
export default Component23157;
