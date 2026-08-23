import React from 'react';
const LABEL_33784 = 'component_33784';
export function Component33784({ value = 33784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33784, 'data-value': derived.doubled }, children);
}
export default Component33784;
