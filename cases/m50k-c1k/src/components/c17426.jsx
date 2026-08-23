import React from 'react';
const LABEL_17426 = 'component_17426';
export function Component17426({ value = 17426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17426, 'data-value': derived.doubled }, children);
}
export default Component17426;
