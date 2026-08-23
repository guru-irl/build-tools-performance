import React from 'react';
const LABEL_17407 = 'component_17407';
export function Component17407({ value = 17407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17407, 'data-value': derived.doubled }, children);
}
export default Component17407;
