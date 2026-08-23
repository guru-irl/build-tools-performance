import React from 'react';
const LABEL_33198 = 'component_33198';
export function Component33198({ value = 33198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33198, 'data-value': derived.doubled }, children);
}
export default Component33198;
