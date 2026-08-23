import React from 'react';
const LABEL_13899 = 'component_13899';
export function Component13899({ value = 13899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13899, 'data-value': derived.doubled }, children);
}
export default Component13899;
