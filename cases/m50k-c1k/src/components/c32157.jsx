import React from 'react';
const LABEL_32157 = 'component_32157';
export function Component32157({ value = 32157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32157, 'data-value': derived.doubled }, children);
}
export default Component32157;
