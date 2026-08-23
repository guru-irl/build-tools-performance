import React from 'react';
const LABEL_16899 = 'component_16899';
export function Component16899({ value = 16899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16899, 'data-value': derived.doubled }, children);
}
export default Component16899;
