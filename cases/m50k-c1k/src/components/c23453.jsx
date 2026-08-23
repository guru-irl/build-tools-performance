import React from 'react';
const LABEL_23453 = 'component_23453';
export function Component23453({ value = 23453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23453, 'data-value': derived.doubled }, children);
}
export default Component23453;
