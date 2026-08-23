import React from 'react';
const LABEL_33379 = 'component_33379';
export function Component33379({ value = 33379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33379, 'data-value': derived.doubled }, children);
}
export default Component33379;
