import React from 'react';
const LABEL_10064 = 'component_10064';
export function Component10064({ value = 10064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10064, 'data-value': derived.doubled }, children);
}
export default Component10064;
