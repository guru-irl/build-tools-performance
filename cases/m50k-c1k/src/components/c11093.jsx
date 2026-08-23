import React from 'react';
const LABEL_11093 = 'component_11093';
export function Component11093({ value = 11093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11093, 'data-value': derived.doubled }, children);
}
export default Component11093;
