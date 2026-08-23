import React from 'react';
const LABEL_43170 = 'component_43170';
export function Component43170({ value = 43170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43170, 'data-value': derived.doubled }, children);
}
export default Component43170;
