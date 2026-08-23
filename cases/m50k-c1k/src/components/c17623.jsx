import React from 'react';
const LABEL_17623 = 'component_17623';
export function Component17623({ value = 17623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17623, 'data-value': derived.doubled }, children);
}
export default Component17623;
