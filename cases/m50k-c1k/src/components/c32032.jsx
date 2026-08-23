import React from 'react';
const LABEL_32032 = 'component_32032';
export function Component32032({ value = 32032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32032, 'data-value': derived.doubled }, children);
}
export default Component32032;
