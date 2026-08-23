import React from 'react';
const LABEL_28157 = 'component_28157';
export function Component28157({ value = 28157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28157, 'data-value': derived.doubled }, children);
}
export default Component28157;
