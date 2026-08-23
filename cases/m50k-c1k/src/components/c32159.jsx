import React from 'react';
const LABEL_32159 = 'component_32159';
export function Component32159({ value = 32159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32159, 'data-value': derived.doubled }, children);
}
export default Component32159;
