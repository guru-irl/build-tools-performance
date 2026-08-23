import React from 'react';
const LABEL_25346 = 'component_25346';
export function Component25346({ value = 25346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25346, 'data-value': derived.doubled }, children);
}
export default Component25346;
