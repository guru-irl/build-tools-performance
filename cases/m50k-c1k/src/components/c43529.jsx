import React from 'react';
const LABEL_43529 = 'component_43529';
export function Component43529({ value = 43529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43529, 'data-value': derived.doubled }, children);
}
export default Component43529;
