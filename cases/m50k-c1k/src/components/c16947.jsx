import React from 'react';
const LABEL_16947 = 'component_16947';
export function Component16947({ value = 16947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16947, 'data-value': derived.doubled }, children);
}
export default Component16947;
