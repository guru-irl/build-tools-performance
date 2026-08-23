import React from 'react';
const LABEL_33680 = 'component_33680';
export function Component33680({ value = 33680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33680, 'data-value': derived.doubled }, children);
}
export default Component33680;
