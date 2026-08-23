import React from 'react';
const LABEL_15705 = 'component_15705';
export function Component15705({ value = 15705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15705, 'data-value': derived.doubled }, children);
}
export default Component15705;
