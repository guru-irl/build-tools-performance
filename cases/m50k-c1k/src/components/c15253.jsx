import React from 'react';
const LABEL_15253 = 'component_15253';
export function Component15253({ value = 15253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15253, 'data-value': derived.doubled }, children);
}
export default Component15253;
