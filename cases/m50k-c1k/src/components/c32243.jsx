import React from 'react';
const LABEL_32243 = 'component_32243';
export function Component32243({ value = 32243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32243, 'data-value': derived.doubled }, children);
}
export default Component32243;
