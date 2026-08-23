import React from 'react';
const LABEL_3530 = 'component_3530';
export function Component3530({ value = 3530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3530, 'data-value': derived.doubled }, children);
}
export default Component3530;
