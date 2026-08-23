import React from 'react';
const LABEL_18474 = 'component_18474';
export function Component18474({ value = 18474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18474, 'data-value': derived.doubled }, children);
}
export default Component18474;
