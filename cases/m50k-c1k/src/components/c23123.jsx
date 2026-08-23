import React from 'react';
const LABEL_23123 = 'component_23123';
export function Component23123({ value = 23123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23123, 'data-value': derived.doubled }, children);
}
export default Component23123;
