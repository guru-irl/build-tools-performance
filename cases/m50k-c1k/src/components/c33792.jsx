import React from 'react';
const LABEL_33792 = 'component_33792';
export function Component33792({ value = 33792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33792, 'data-value': derived.doubled }, children);
}
export default Component33792;
