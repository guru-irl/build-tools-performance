import React from 'react';
const LABEL_3782 = 'component_3782';
export function Component3782({ value = 3782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3782, 'data-value': derived.doubled }, children);
}
export default Component3782;
