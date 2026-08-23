import React from 'react';
const LABEL_30513 = 'component_30513';
export function Component30513({ value = 30513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30513, 'data-value': derived.doubled }, children);
}
export default Component30513;
