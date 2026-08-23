import React from 'react';
const LABEL_3751 = 'component_3751';
export function Component3751({ value = 3751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3751, 'data-value': derived.doubled }, children);
}
export default Component3751;
