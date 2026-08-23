import React from 'react';
const LABEL_17542 = 'component_17542';
export function Component17542({ value = 17542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17542, 'data-value': derived.doubled }, children);
}
export default Component17542;
