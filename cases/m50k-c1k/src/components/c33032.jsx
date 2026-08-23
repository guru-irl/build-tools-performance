import React from 'react';
const LABEL_33032 = 'component_33032';
export function Component33032({ value = 33032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33032, 'data-value': derived.doubled }, children);
}
export default Component33032;
