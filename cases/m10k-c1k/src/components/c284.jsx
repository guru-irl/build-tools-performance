import React from 'react';
const LABEL_284 = 'component_284';
export function Component284({ value = 284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_284, 'data-value': derived.doubled }, children);
}
export default Component284;
