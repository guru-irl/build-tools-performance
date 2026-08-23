import React from 'react';
const LABEL_23161 = 'component_23161';
export function Component23161({ value = 23161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23161, 'data-value': derived.doubled }, children);
}
export default Component23161;
