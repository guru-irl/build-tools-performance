import React from 'react';
const LABEL_32133 = 'component_32133';
export function Component32133({ value = 32133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32133, 'data-value': derived.doubled }, children);
}
export default Component32133;
