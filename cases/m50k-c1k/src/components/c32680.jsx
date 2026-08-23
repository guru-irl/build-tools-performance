import React from 'react';
const LABEL_32680 = 'component_32680';
export function Component32680({ value = 32680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32680, 'data-value': derived.doubled }, children);
}
export default Component32680;
