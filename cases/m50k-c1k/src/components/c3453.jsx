import React from 'react';
const LABEL_3453 = 'component_3453';
export function Component3453({ value = 3453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3453, 'data-value': derived.doubled }, children);
}
export default Component3453;
