import React from 'react';
const LABEL_6504 = 'component_6504';
export function Component6504({ value = 6504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6504, 'data-value': derived.doubled }, children);
}
export default Component6504;
