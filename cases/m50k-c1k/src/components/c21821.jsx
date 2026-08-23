import React from 'react';
const LABEL_21821 = 'component_21821';
export function Component21821({ value = 21821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21821, 'data-value': derived.doubled }, children);
}
export default Component21821;
