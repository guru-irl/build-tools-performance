import React from 'react';
const LABEL_33504 = 'component_33504';
export function Component33504({ value = 33504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33504, 'data-value': derived.doubled }, children);
}
export default Component33504;
