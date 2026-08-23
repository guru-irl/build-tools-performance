import React from 'react';
const LABEL_776 = 'component_776';
export function Component776({ value = 776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_776, 'data-value': derived.doubled }, children);
}
export default Component776;
