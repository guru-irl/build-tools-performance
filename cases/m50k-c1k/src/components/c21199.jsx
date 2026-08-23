import React from 'react';
const LABEL_21199 = 'component_21199';
export function Component21199({ value = 21199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21199, 'data-value': derived.doubled }, children);
}
export default Component21199;
