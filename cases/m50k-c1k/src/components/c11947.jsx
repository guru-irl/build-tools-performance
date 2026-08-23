import React from 'react';
const LABEL_11947 = 'component_11947';
export function Component11947({ value = 11947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11947, 'data-value': derived.doubled }, children);
}
export default Component11947;
