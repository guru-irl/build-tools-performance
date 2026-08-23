import React from 'react';
const LABEL_21709 = 'component_21709';
export function Component21709({ value = 21709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21709, 'data-value': derived.doubled }, children);
}
export default Component21709;
