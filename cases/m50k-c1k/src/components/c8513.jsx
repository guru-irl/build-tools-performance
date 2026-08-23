import React from 'react';
const LABEL_8513 = 'component_8513';
export function Component8513({ value = 8513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8513, 'data-value': derived.doubled }, children);
}
export default Component8513;
