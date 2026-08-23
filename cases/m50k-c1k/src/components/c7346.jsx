import React from 'react';
const LABEL_7346 = 'component_7346';
export function Component7346({ value = 7346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7346, 'data-value': derived.doubled }, children);
}
export default Component7346;
