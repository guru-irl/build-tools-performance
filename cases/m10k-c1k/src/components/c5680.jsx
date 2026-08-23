import React from 'react';
const LABEL_5680 = 'component_5680';
export function Component5680({ value = 5680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5680, 'data-value': derived.doubled }, children);
}
export default Component5680;
