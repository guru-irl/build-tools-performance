import React from 'react';
const LABEL_1346 = 'component_1346';
export function Component1346({ value = 1346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1346, 'data-value': derived.doubled }, children);
}
export default Component1346;
