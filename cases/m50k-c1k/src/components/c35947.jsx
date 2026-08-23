import React from 'react';
const LABEL_35947 = 'component_35947';
export function Component35947({ value = 35947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35947, 'data-value': derived.doubled }, children);
}
export default Component35947;
