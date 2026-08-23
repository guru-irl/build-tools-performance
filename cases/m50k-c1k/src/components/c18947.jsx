import React from 'react';
const LABEL_18947 = 'component_18947';
export function Component18947({ value = 18947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18947, 'data-value': derived.doubled }, children);
}
export default Component18947;
