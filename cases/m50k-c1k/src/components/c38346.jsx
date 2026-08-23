import React from 'react';
const LABEL_38346 = 'component_38346';
export function Component38346({ value = 38346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38346, 'data-value': derived.doubled }, children);
}
export default Component38346;
