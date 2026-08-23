import React from 'react';
const LABEL_31296 = 'component_31296';
export function Component31296({ value = 31296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31296, 'data-value': derived.doubled }, children);
}
export default Component31296;
