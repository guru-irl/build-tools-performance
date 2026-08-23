import React from 'react';
const LABEL_19947 = 'component_19947';
export function Component19947({ value = 19947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19947, 'data-value': derived.doubled }, children);
}
export default Component19947;
