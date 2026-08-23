import React from 'react';
const LABEL_26296 = 'component_26296';
export function Component26296({ value = 26296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26296, 'data-value': derived.doubled }, children);
}
export default Component26296;
