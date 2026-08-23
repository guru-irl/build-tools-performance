import React from 'react';
const LABEL_13800 = 'component_13800';
export function Component13800({ value = 13800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13800, 'data-value': derived.doubled }, children);
}
export default Component13800;
