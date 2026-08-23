import React from 'react';
const LABEL_29459 = 'component_29459';
export function Component29459({ value = 29459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29459, 'data-value': derived.doubled }, children);
}
export default Component29459;
