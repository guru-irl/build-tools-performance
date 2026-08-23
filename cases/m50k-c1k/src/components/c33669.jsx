import React from 'react';
const LABEL_33669 = 'component_33669';
export function Component33669({ value = 33669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33669, 'data-value': derived.doubled }, children);
}
export default Component33669;
