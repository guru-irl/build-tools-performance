import React from 'react';
const LABEL_10157 = 'component_10157';
export function Component10157({ value = 10157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10157, 'data-value': derived.doubled }, children);
}
export default Component10157;
