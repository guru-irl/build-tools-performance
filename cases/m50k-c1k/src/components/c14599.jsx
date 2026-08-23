import React from 'react';
const LABEL_14599 = 'component_14599';
export function Component14599({ value = 14599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14599, 'data-value': derived.doubled }, children);
}
export default Component14599;
