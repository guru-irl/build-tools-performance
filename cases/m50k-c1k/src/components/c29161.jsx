import React from 'react';
const LABEL_29161 = 'component_29161';
export function Component29161({ value = 29161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29161, 'data-value': derived.doubled }, children);
}
export default Component29161;
