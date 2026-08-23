import React from 'react';
const LABEL_8157 = 'component_8157';
export function Component8157({ value = 8157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8157, 'data-value': derived.doubled }, children);
}
export default Component8157;
