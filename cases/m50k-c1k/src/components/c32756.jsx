import React from 'react';
const LABEL_32756 = 'component_32756';
export function Component32756({ value = 32756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32756, 'data-value': derived.doubled }, children);
}
export default Component32756;
