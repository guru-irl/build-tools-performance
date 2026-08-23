import React from 'react';
const LABEL_38253 = 'component_38253';
export function Component38253({ value = 38253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38253, 'data-value': derived.doubled }, children);
}
export default Component38253;
