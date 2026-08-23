import React from 'react';
const LABEL_32253 = 'component_32253';
export function Component32253({ value = 32253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32253, 'data-value': derived.doubled }, children);
}
export default Component32253;
