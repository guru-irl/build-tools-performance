import React from 'react';
const LABEL_42947 = 'component_42947';
export function Component42947({ value = 42947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42947, 'data-value': derived.doubled }, children);
}
export default Component42947;
