import React from 'react';
const LABEL_18284 = 'component_18284';
export function Component18284({ value = 18284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18284, 'data-value': derived.doubled }, children);
}
export default Component18284;
