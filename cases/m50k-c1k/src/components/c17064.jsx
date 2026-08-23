import React from 'react';
const LABEL_17064 = 'component_17064';
export function Component17064({ value = 17064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17064, 'data-value': derived.doubled }, children);
}
export default Component17064;
