import React from 'react';
const LABEL_20680 = 'component_20680';
export function Component20680({ value = 20680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20680, 'data-value': derived.doubled }, children);
}
export default Component20680;
