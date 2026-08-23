import React from 'react';
const LABEL_33531 = 'component_33531';
export function Component33531({ value = 33531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33531, 'data-value': derived.doubled }, children);
}
export default Component33531;
