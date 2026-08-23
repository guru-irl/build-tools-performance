import React from 'react';
const LABEL_17055 = 'component_17055';
export function Component17055({ value = 17055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17055, 'data-value': derived.doubled }, children);
}
export default Component17055;
