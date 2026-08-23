import React from 'react';
const LABEL_13161 = 'component_13161';
export function Component13161({ value = 13161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13161, 'data-value': derived.doubled }, children);
}
export default Component13161;
