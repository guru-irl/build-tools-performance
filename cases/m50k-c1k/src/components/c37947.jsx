import React from 'react';
const LABEL_37947 = 'component_37947';
export function Component37947({ value = 37947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37947, 'data-value': derived.doubled }, children);
}
export default Component37947;
