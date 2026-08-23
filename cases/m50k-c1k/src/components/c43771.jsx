import React from 'react';
const LABEL_43771 = 'component_43771';
export function Component43771({ value = 43771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43771, 'data-value': derived.doubled }, children);
}
export default Component43771;
