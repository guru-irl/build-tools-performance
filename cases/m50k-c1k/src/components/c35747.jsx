import React from 'react';
const LABEL_35747 = 'component_35747';
export function Component35747({ value = 35747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35747, 'data-value': derived.doubled }, children);
}
export default Component35747;
