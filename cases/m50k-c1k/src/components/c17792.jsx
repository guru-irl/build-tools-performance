import React from 'react';
const LABEL_17792 = 'component_17792';
export function Component17792({ value = 17792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17792, 'data-value': derived.doubled }, children);
}
export default Component17792;
