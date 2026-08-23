import React from 'react';
const LABEL_33047 = 'component_33047';
export function Component33047({ value = 33047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33047, 'data-value': derived.doubled }, children);
}
export default Component33047;
