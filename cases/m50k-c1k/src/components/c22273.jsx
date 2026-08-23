import React from 'react';
const LABEL_22273 = 'component_22273';
export function Component22273({ value = 22273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22273, 'data-value': derived.doubled }, children);
}
export default Component22273;
