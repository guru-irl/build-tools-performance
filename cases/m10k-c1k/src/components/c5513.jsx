import React from 'react';
const LABEL_5513 = 'component_5513';
export function Component5513({ value = 5513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5513, 'data-value': derived.doubled }, children);
}
export default Component5513;
