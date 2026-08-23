import React from 'react';
const LABEL_43789 = 'component_43789';
export function Component43789({ value = 43789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43789, 'data-value': derived.doubled }, children);
}
export default Component43789;
