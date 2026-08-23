import React from 'react';
const LABEL_3836 = 'component_3836';
export function Component3836({ value = 3836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3836, 'data-value': derived.doubled }, children);
}
export default Component3836;
