import React from 'react';
const LABEL_32362 = 'component_32362';
export function Component32362({ value = 32362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32362, 'data-value': derived.doubled }, children);
}
export default Component32362;
