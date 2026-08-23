import React from 'react';
const LABEL_12821 = 'component_12821';
export function Component12821({ value = 12821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12821, 'data-value': derived.doubled }, children);
}
export default Component12821;
