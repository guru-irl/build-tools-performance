import React from 'react';
const LABEL_11134 = 'component_11134';
export function Component11134({ value = 11134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11134, 'data-value': derived.doubled }, children);
}
export default Component11134;
