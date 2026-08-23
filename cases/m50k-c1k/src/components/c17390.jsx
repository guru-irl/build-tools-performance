import React from 'react';
const LABEL_17390 = 'component_17390';
export function Component17390({ value = 17390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17390, 'data-value': derived.doubled }, children);
}
export default Component17390;
