import React from 'react';
const LABEL_18253 = 'component_18253';
export function Component18253({ value = 18253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18253, 'data-value': derived.doubled }, children);
}
export default Component18253;
