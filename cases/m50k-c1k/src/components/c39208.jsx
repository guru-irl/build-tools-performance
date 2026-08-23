import React from 'react';
const LABEL_39208 = 'component_39208';
export function Component39208({ value = 39208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39208, 'data-value': derived.doubled }, children);
}
export default Component39208;
