import React from 'react';
const LABEL_33382 = 'component_33382';
export function Component33382({ value = 33382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33382, 'data-value': derived.doubled }, children);
}
export default Component33382;
