import React from 'react';
const LABEL_17712 = 'component_17712';
export function Component17712({ value = 17712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17712, 'data-value': derived.doubled }, children);
}
export default Component17712;
