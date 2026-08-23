import React from 'react';
const LABEL_7821 = 'component_7821';
export function Component7821({ value = 7821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7821, 'data-value': derived.doubled }, children);
}
export default Component7821;
