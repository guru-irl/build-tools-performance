import React from 'react';
const LABEL_36680 = 'component_36680';
export function Component36680({ value = 36680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36680, 'data-value': derived.doubled }, children);
}
export default Component36680;
