import React from 'react';
const LABEL_18776 = 'component_18776';
export function Component18776({ value = 18776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18776, 'data-value': derived.doubled }, children);
}
export default Component18776;
