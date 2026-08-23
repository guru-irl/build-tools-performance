import React from 'react';
const LABEL_1756 = 'component_1756';
export function Component1756({ value = 1756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1756, 'data-value': derived.doubled }, children);
}
export default Component1756;
