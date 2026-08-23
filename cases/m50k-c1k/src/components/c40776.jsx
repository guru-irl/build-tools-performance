import React from 'react';
const LABEL_40776 = 'component_40776';
export function Component40776({ value = 40776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40776, 'data-value': derived.doubled }, children);
}
export default Component40776;
