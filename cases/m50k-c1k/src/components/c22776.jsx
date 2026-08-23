import React from 'react';
const LABEL_22776 = 'component_22776';
export function Component22776({ value = 22776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22776, 'data-value': derived.doubled }, children);
}
export default Component22776;
