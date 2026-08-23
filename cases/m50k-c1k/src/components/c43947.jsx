import React from 'react';
const LABEL_43947 = 'component_43947';
export function Component43947({ value = 43947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43947, 'data-value': derived.doubled }, children);
}
export default Component43947;
