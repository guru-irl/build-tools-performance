import React from 'react';
const LABEL_45680 = 'component_45680';
export function Component45680({ value = 45680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45680, 'data-value': derived.doubled }, children);
}
export default Component45680;
