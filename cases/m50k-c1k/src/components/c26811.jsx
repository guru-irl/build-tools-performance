import React from 'react';
const LABEL_26811 = 'component_26811';
export function Component26811({ value = 26811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26811, 'data-value': derived.doubled }, children);
}
export default Component26811;
