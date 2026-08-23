import React from 'react';
const LABEL_9092 = 'component_9092';
export function Component9092({ value = 9092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9092, 'data-value': derived.doubled }, children);
}
export default Component9092;
