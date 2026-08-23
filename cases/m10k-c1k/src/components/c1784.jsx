import React from 'react';
const LABEL_1784 = 'component_1784';
export function Component1784({ value = 1784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1784, 'data-value': derived.doubled }, children);
}
export default Component1784;
