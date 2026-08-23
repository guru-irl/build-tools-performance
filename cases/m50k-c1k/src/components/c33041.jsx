import React from 'react';
const LABEL_33041 = 'component_33041';
export function Component33041({ value = 33041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33041, 'data-value': derived.doubled }, children);
}
export default Component33041;
