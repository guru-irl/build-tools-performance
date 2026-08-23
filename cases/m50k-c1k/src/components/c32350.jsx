import React from 'react';
const LABEL_32350 = 'component_32350';
export function Component32350({ value = 32350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32350, 'data-value': derived.doubled }, children);
}
export default Component32350;
