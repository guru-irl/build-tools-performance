import React from 'react';
const LABEL_14513 = 'component_14513';
export function Component14513({ value = 14513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14513, 'data-value': derived.doubled }, children);
}
export default Component14513;
