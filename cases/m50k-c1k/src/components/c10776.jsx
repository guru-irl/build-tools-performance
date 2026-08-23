import React from 'react';
const LABEL_10776 = 'component_10776';
export function Component10776({ value = 10776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10776, 'data-value': derived.doubled }, children);
}
export default Component10776;
