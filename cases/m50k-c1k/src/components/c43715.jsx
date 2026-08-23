import React from 'react';
const LABEL_43715 = 'component_43715';
export function Component43715({ value = 43715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43715, 'data-value': derived.doubled }, children);
}
export default Component43715;
