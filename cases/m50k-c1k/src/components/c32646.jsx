import React from 'react';
const LABEL_32646 = 'component_32646';
export function Component32646({ value = 32646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32646, 'data-value': derived.doubled }, children);
}
export default Component32646;
