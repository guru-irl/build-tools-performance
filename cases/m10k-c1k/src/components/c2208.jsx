import React from 'react';
const LABEL_2208 = 'component_2208';
export function Component2208({ value = 2208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2208, 'data-value': derived.doubled }, children);
}
export default Component2208;
