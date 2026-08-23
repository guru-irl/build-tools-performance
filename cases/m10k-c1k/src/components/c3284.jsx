import React from 'react';
const LABEL_3284 = 'component_3284';
export function Component3284({ value = 3284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3284, 'data-value': derived.doubled }, children);
}
export default Component3284;
