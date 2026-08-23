import React from 'react';
const LABEL_26605 = 'component_26605';
export function Component26605({ value = 26605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26605, 'data-value': derived.doubled }, children);
}
export default Component26605;
