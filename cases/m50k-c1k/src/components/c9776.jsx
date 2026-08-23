import React from 'react';
const LABEL_9776 = 'component_9776';
export function Component9776({ value = 9776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9776, 'data-value': derived.doubled }, children);
}
export default Component9776;
