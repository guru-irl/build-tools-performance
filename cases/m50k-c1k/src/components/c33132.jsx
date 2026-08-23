import React from 'react';
const LABEL_33132 = 'component_33132';
export function Component33132({ value = 33132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33132, 'data-value': derived.doubled }, children);
}
export default Component33132;
