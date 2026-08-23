import React from 'react';
const LABEL_21346 = 'component_21346';
export function Component21346({ value = 21346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21346, 'data-value': derived.doubled }, children);
}
export default Component21346;
