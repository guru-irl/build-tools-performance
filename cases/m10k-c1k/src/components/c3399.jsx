import React from 'react';
const LABEL_3399 = 'component_3399';
export function Component3399({ value = 3399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3399, 'data-value': derived.doubled }, children);
}
export default Component3399;
