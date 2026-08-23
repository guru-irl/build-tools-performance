import React from 'react';
const LABEL_39253 = 'component_39253';
export function Component39253({ value = 39253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39253, 'data-value': derived.doubled }, children);
}
export default Component39253;
