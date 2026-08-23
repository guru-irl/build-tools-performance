import React from 'react';
const LABEL_2346 = 'component_2346';
export function Component2346({ value = 2346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2346, 'data-value': derived.doubled }, children);
}
export default Component2346;
