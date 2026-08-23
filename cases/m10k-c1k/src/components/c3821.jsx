import React from 'react';
const LABEL_3821 = 'component_3821';
export function Component3821({ value = 3821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3821, 'data-value': derived.doubled }, children);
}
export default Component3821;
