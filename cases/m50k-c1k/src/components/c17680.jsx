import React from 'react';
const LABEL_17680 = 'component_17680';
export function Component17680({ value = 17680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17680, 'data-value': derived.doubled }, children);
}
export default Component17680;
