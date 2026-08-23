import React from 'react';
const LABEL_32899 = 'component_32899';
export function Component32899({ value = 32899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32899, 'data-value': derived.doubled }, children);
}
export default Component32899;
