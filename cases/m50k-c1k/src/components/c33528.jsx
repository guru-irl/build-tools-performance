import React from 'react';
const LABEL_33528 = 'component_33528';
export function Component33528({ value = 33528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33528, 'data-value': derived.doubled }, children);
}
export default Component33528;
