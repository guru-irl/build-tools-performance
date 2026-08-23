import React from 'react';
const LABEL_12784 = 'component_12784';
export function Component12784({ value = 12784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12784, 'data-value': derived.doubled }, children);
}
export default Component12784;
