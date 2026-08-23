import React from 'react';
const LABEL_28912 = 'component_28912';
export function Component28912({ value = 28912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28912, 'data-value': derived.doubled }, children);
}
export default Component28912;
