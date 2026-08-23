import React from 'react';
const LABEL_33893 = 'component_33893';
export function Component33893({ value = 33893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33893, 'data-value': derived.doubled }, children);
}
export default Component33893;
