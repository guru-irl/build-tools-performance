import React from 'react';
const LABEL_27389 = 'component_27389';
export function Component27389({ value = 27389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27389, 'data-value': derived.doubled }, children);
}
export default Component27389;
