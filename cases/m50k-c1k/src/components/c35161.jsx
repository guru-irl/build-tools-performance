import React from 'react';
const LABEL_35161 = 'component_35161';
export function Component35161({ value = 35161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35161, 'data-value': derived.doubled }, children);
}
export default Component35161;
