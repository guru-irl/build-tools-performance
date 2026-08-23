import React from 'react';
const LABEL_4513 = 'component_4513';
export function Component4513({ value = 4513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4513, 'data-value': derived.doubled }, children);
}
export default Component4513;
