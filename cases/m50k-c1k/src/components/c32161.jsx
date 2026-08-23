import React from 'react';
const LABEL_32161 = 'component_32161';
export function Component32161({ value = 32161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32161, 'data-value': derived.doubled }, children);
}
export default Component32161;
