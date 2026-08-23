import React from 'react';
const LABEL_32784 = 'component_32784';
export function Component32784({ value = 32784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32784, 'data-value': derived.doubled }, children);
}
export default Component32784;
