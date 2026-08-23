import React from 'react';
const LABEL_3095 = 'component_3095';
export function Component3095({ value = 3095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3095, 'data-value': derived.doubled }, children);
}
export default Component3095;
