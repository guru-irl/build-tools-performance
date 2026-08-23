import React from 'react';
const LABEL_9438 = 'component_9438';
export function Component9438({ value = 9438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9438, 'data-value': derived.doubled }, children);
}
export default Component9438;
