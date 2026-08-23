import React from 'react';
const LABEL_6063 = 'component_6063';
export function Component6063({ value = 6063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6063, 'data-value': derived.doubled }, children);
}
export default Component6063;
