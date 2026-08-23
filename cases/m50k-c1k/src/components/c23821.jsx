import React from 'react';
const LABEL_23821 = 'component_23821';
export function Component23821({ value = 23821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23821, 'data-value': derived.doubled }, children);
}
export default Component23821;
