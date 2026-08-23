import React from 'react';
const LABEL_22208 = 'component_22208';
export function Component22208({ value = 22208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22208, 'data-value': derived.doubled }, children);
}
export default Component22208;
