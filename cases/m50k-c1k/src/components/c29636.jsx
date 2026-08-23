import React from 'react';
const LABEL_29636 = 'component_29636';
export function Component29636({ value = 29636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29636, 'data-value': derived.doubled }, children);
}
export default Component29636;
