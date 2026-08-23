import React from 'react';
const LABEL_38157 = 'component_38157';
export function Component38157({ value = 38157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38157, 'data-value': derived.doubled }, children);
}
export default Component38157;
