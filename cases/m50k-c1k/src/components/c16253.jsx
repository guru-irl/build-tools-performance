import React from 'react';
const LABEL_16253 = 'component_16253';
export function Component16253({ value = 16253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16253, 'data-value': derived.doubled }, children);
}
export default Component16253;
