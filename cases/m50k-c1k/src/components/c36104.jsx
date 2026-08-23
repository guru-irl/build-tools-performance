import React from 'react';
const LABEL_36104 = 'component_36104';
export function Component36104({ value = 36104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36104, 'data-value': derived.doubled }, children);
}
export default Component36104;
