import React from 'react';
const LABEL_24680 = 'component_24680';
export function Component24680({ value = 24680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24680, 'data-value': derived.doubled }, children);
}
export default Component24680;
