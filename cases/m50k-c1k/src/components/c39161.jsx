import React from 'react';
const LABEL_39161 = 'component_39161';
export function Component39161({ value = 39161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39161, 'data-value': derived.doubled }, children);
}
export default Component39161;
