import React from 'react';
const LABEL_43047 = 'component_43047';
export function Component43047({ value = 43047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43047, 'data-value': derived.doubled }, children);
}
export default Component43047;
