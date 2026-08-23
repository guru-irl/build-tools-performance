import React from 'react';
const LABEL_17910 = 'component_17910';
export function Component17910({ value = 17910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17910, 'data-value': derived.doubled }, children);
}
export default Component17910;
