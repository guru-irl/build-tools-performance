import React from 'react';
const LABEL_25899 = 'component_25899';
export function Component25899({ value = 25899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25899, 'data-value': derived.doubled }, children);
}
export default Component25899;
