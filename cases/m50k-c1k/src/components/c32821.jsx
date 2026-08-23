import React from 'react';
const LABEL_32821 = 'component_32821';
export function Component32821({ value = 32821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32821, 'data-value': derived.doubled }, children);
}
export default Component32821;
