import React from 'react';
const LABEL_6756 = 'component_6756';
export function Component6756({ value = 6756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6756, 'data-value': derived.doubled }, children);
}
export default Component6756;
