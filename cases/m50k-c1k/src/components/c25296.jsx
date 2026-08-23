import React from 'react';
const LABEL_25296 = 'component_25296';
export function Component25296({ value = 25296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25296, 'data-value': derived.doubled }, children);
}
export default Component25296;
