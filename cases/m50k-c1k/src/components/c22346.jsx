import React from 'react';
const LABEL_22346 = 'component_22346';
export function Component22346({ value = 22346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22346, 'data-value': derived.doubled }, children);
}
export default Component22346;
