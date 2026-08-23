import React from 'react';
const LABEL_13032 = 'component_13032';
export function Component13032({ value = 13032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13032, 'data-value': derived.doubled }, children);
}
export default Component13032;
