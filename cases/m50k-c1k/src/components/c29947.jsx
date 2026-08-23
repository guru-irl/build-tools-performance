import React from 'react';
const LABEL_29947 = 'component_29947';
export function Component29947({ value = 29947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29947, 'data-value': derived.doubled }, children);
}
export default Component29947;
