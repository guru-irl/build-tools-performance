import React from 'react';
const LABEL_5346 = 'component_5346';
export function Component5346({ value = 5346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5346, 'data-value': derived.doubled }, children);
}
export default Component5346;
