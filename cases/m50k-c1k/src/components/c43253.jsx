import React from 'react';
const LABEL_43253 = 'component_43253';
export function Component43253({ value = 43253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43253, 'data-value': derived.doubled }, children);
}
export default Component43253;
