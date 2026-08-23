import React from 'react';
const LABEL_5296 = 'component_5296';
export function Component5296({ value = 5296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5296, 'data-value': derived.doubled }, children);
}
export default Component5296;
