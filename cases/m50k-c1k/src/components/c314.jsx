import React from 'react';
const LABEL_314 = 'component_314';
export function Component314({ value = 314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_314, 'data-value': derived.doubled }, children);
}
export default Component314;
