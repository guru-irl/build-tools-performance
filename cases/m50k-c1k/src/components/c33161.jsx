import React from 'react';
const LABEL_33161 = 'component_33161';
export function Component33161({ value = 33161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33161, 'data-value': derived.doubled }, children);
}
export default Component33161;
