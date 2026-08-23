import React from 'react';
const LABEL_23776 = 'component_23776';
export function Component23776({ value = 23776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23776, 'data-value': derived.doubled }, children);
}
export default Component23776;
