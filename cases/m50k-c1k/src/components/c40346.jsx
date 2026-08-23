import React from 'react';
const LABEL_40346 = 'component_40346';
export function Component40346({ value = 40346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40346, 'data-value': derived.doubled }, children);
}
export default Component40346;
