import React from 'react';
const LABEL_10346 = 'component_10346';
export function Component10346({ value = 10346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10346, 'data-value': derived.doubled }, children);
}
export default Component10346;
