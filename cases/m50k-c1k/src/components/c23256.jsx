import React from 'react';
const LABEL_23256 = 'component_23256';
export function Component23256({ value = 23256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23256, 'data-value': derived.doubled }, children);
}
export default Component23256;
