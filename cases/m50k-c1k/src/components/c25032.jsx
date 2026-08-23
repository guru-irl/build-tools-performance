import React from 'react';
const LABEL_25032 = 'component_25032';
export function Component25032({ value = 25032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25032, 'data-value': derived.doubled }, children);
}
export default Component25032;
