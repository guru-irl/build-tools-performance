import React from 'react';
const LABEL_32750 = 'component_32750';
export function Component32750({ value = 32750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32750, 'data-value': derived.doubled }, children);
}
export default Component32750;
