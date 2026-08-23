import React from 'react';
const LABEL_36253 = 'component_36253';
export function Component36253({ value = 36253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36253, 'data-value': derived.doubled }, children);
}
export default Component36253;
