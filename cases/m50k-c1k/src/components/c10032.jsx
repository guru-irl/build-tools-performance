import React from 'react';
const LABEL_10032 = 'component_10032';
export function Component10032({ value = 10032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10032, 'data-value': derived.doubled }, children);
}
export default Component10032;
