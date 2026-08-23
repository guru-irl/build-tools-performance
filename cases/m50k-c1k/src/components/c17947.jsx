import React from 'react';
const LABEL_17947 = 'component_17947';
export function Component17947({ value = 17947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17947, 'data-value': derived.doubled }, children);
}
export default Component17947;
