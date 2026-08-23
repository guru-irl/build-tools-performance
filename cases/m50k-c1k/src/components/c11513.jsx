import React from 'react';
const LABEL_11513 = 'component_11513';
export function Component11513({ value = 11513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11513, 'data-value': derived.doubled }, children);
}
export default Component11513;
