import React from 'react';
const LABEL_17147 = 'component_17147';
export function Component17147({ value = 17147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17147, 'data-value': derived.doubled }, children);
}
export default Component17147;
