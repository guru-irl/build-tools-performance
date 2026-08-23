import React from 'react';
const LABEL_623 = 'component_623';
export function Component623({ value = 623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_623, 'data-value': derived.doubled }, children);
}
export default Component623;
