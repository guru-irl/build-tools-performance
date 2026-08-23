import React from 'react';
const LABEL_17648 = 'component_17648';
export function Component17648({ value = 17648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17648, 'data-value': derived.doubled }, children);
}
export default Component17648;
