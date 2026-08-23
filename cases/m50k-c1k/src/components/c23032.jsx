import React from 'react';
const LABEL_23032 = 'component_23032';
export function Component23032({ value = 23032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23032, 'data-value': derived.doubled }, children);
}
export default Component23032;
