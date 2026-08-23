import React from 'react';
const LABEL_3161 = 'component_3161';
export function Component3161({ value = 3161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3161, 'data-value': derived.doubled }, children);
}
export default Component3161;
