import React from 'react';
const LABEL_4947 = 'component_4947';
export function Component4947({ value = 4947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4947, 'data-value': derived.doubled }, children);
}
export default Component4947;
