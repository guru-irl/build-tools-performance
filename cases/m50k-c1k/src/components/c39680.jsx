import React from 'react';
const LABEL_39680 = 'component_39680';
export function Component39680({ value = 39680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39680, 'data-value': derived.doubled }, children);
}
export default Component39680;
