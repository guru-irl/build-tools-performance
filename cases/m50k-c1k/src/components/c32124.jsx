import React from 'react';
const LABEL_32124 = 'component_32124';
export function Component32124({ value = 32124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32124, 'data-value': derived.doubled }, children);
}
export default Component32124;
