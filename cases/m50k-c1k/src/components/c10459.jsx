import React from 'react';
const LABEL_10459 = 'component_10459';
export function Component10459({ value = 10459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10459, 'data-value': derived.doubled }, children);
}
export default Component10459;
