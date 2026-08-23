import React from 'react';
const LABEL_26680 = 'component_26680';
export function Component26680({ value = 26680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26680, 'data-value': derived.doubled }, children);
}
export default Component26680;
