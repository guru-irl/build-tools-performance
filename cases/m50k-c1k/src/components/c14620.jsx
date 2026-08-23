import React from 'react';
const LABEL_14620 = 'component_14620';
export function Component14620({ value = 14620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14620, 'data-value': derived.doubled }, children);
}
export default Component14620;
