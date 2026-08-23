import React from 'react';
const LABEL_21032 = 'component_21032';
export function Component21032({ value = 21032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21032, 'data-value': derived.doubled }, children);
}
export default Component21032;
