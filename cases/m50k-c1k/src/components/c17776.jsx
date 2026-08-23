import React from 'react';
const LABEL_17776 = 'component_17776';
export function Component17776({ value = 17776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17776, 'data-value': derived.doubled }, children);
}
export default Component17776;
