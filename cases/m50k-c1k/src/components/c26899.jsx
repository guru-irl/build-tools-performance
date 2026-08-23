import React from 'react';
const LABEL_26899 = 'component_26899';
export function Component26899({ value = 26899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26899, 'data-value': derived.doubled }, children);
}
export default Component26899;
