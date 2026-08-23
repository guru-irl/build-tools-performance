import React from 'react';
const LABEL_3705 = 'component_3705';
export function Component3705({ value = 3705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3705, 'data-value': derived.doubled }, children);
}
export default Component3705;
