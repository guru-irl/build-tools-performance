import React from 'react';
const LABEL_17132 = 'component_17132';
export function Component17132({ value = 17132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17132, 'data-value': derived.doubled }, children);
}
export default Component17132;
