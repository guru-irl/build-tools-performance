import React from 'react';
const LABEL_13821 = 'component_13821';
export function Component13821({ value = 13821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13821, 'data-value': derived.doubled }, children);
}
export default Component13821;
