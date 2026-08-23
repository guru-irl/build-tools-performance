import React from 'react';
const LABEL_17629 = 'component_17629';
export function Component17629({ value = 17629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17629, 'data-value': derived.doubled }, children);
}
export default Component17629;
