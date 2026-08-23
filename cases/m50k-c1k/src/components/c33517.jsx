import React from 'react';
const LABEL_33517 = 'component_33517';
export function Component33517({ value = 33517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33517, 'data-value': derived.doubled }, children);
}
export default Component33517;
