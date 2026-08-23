import React from 'react';
const LABEL_2399 = 'component_2399';
export function Component2399({ value = 2399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2399, 'data-value': derived.doubled }, children);
}
export default Component2399;
