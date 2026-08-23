import React from 'react';
const LABEL_45947 = 'component_45947';
export function Component45947({ value = 45947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45947, 'data-value': derived.doubled }, children);
}
export default Component45947;
