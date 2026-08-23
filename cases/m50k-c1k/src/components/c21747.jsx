import React from 'react';
const LABEL_21747 = 'component_21747';
export function Component21747({ value = 21747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21747, 'data-value': derived.doubled }, children);
}
export default Component21747;
