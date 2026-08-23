import React from 'react';
const LABEL_23680 = 'component_23680';
export function Component23680({ value = 23680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23680, 'data-value': derived.doubled }, children);
}
export default Component23680;
