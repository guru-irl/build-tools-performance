import React from 'react';
const LABEL_16784 = 'component_16784';
export function Component16784({ value = 16784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16784, 'data-value': derived.doubled }, children);
}
export default Component16784;
