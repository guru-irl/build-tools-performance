import React from 'react';
const LABEL_13208 = 'component_13208';
export function Component13208({ value = 13208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13208, 'data-value': derived.doubled }, children);
}
export default Component13208;
