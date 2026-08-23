import React from 'react';
const LABEL_12093 = 'component_12093';
export function Component12093({ value = 12093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12093, 'data-value': derived.doubled }, children);
}
export default Component12093;
