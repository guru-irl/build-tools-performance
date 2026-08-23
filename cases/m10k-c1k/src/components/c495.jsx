import React from 'react';
const LABEL_495 = 'component_495';
export function Component495({ value = 495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_495, 'data-value': derived.doubled }, children);
}
export default Component495;
