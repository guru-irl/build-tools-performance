import React from 'react';
const LABEL_12800 = 'component_12800';
export function Component12800({ value = 12800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12800, 'data-value': derived.doubled }, children);
}
export default Component12800;
