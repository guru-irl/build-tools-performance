import React from 'react';
const LABEL_26324 = 'component_26324';
export function Component26324({ value = 26324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26324, 'data-value': derived.doubled }, children);
}
export default Component26324;
