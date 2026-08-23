import React from 'react';
const LABEL_12680 = 'component_12680';
export function Component12680({ value = 12680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12680, 'data-value': derived.doubled }, children);
}
export default Component12680;
