import React from 'react';
const LABEL_15925 = 'component_15925';
export function Component15925({ value = 15925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15925, 'data-value': derived.doubled }, children);
}
export default Component15925;
