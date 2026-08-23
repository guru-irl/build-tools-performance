import React from 'react';
const LABEL_27680 = 'component_27680';
export function Component27680({ value = 27680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27680, 'data-value': derived.doubled }, children);
}
export default Component27680;
