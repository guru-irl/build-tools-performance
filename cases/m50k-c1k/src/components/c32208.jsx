import React from 'react';
const LABEL_32208 = 'component_32208';
export function Component32208({ value = 32208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32208, 'data-value': derived.doubled }, children);
}
export default Component32208;
