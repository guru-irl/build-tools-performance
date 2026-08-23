import React from 'react';
const LABEL_33417 = 'component_33417';
export function Component33417({ value = 33417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33417, 'data-value': derived.doubled }, children);
}
export default Component33417;
