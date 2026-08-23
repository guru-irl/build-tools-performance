import React from 'react';
const LABEL_31947 = 'component_31947';
export function Component31947({ value = 31947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31947, 'data-value': derived.doubled }, children);
}
export default Component31947;
