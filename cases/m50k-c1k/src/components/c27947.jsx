import React from 'react';
const LABEL_27947 = 'component_27947';
export function Component27947({ value = 27947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27947, 'data-value': derived.doubled }, children);
}
export default Component27947;
