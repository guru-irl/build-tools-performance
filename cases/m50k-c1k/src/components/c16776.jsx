import React from 'react';
const LABEL_16776 = 'component_16776';
export function Component16776({ value = 16776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16776, 'data-value': derived.doubled }, children);
}
export default Component16776;
