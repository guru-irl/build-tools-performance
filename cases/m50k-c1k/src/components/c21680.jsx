import React from 'react';
const LABEL_21680 = 'component_21680';
export function Component21680({ value = 21680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21680, 'data-value': derived.doubled }, children);
}
export default Component21680;
