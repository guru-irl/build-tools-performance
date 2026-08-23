import React from 'react';
const LABEL_25429 = 'component_25429';
export function Component25429({ value = 25429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25429, 'data-value': derived.doubled }, children);
}
export default Component25429;
