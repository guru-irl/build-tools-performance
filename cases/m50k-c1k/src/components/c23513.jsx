import React from 'react';
const LABEL_23513 = 'component_23513';
export function Component23513({ value = 23513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23513, 'data-value': derived.doubled }, children);
}
export default Component23513;
