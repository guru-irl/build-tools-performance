import React from 'react';
const LABEL_15198 = 'component_15198';
export function Component15198({ value = 15198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15198, 'data-value': derived.doubled }, children);
}
export default Component15198;
