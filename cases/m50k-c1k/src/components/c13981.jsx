import React from 'react';
const LABEL_13981 = 'component_13981';
export function Component13981({ value = 13981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13981, 'data-value': derived.doubled }, children);
}
export default Component13981;
