import React from 'react';
const LABEL_42324 = 'component_42324';
export function Component42324({ value = 42324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42324, 'data-value': derived.doubled }, children);
}
export default Component42324;
