import React from 'react';
const LABEL_4157 = 'component_4157';
export function Component4157({ value = 4157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4157, 'data-value': derived.doubled }, children);
}
export default Component4157;
