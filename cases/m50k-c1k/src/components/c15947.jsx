import React from 'react';
const LABEL_15947 = 'component_15947';
export function Component15947({ value = 15947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15947, 'data-value': derived.doubled }, children);
}
export default Component15947;
