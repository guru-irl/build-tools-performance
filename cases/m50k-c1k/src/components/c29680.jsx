import React from 'react';
const LABEL_29680 = 'component_29680';
export function Component29680({ value = 29680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29680, 'data-value': derived.doubled }, children);
}
export default Component29680;
