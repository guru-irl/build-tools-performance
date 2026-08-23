import React from 'react';
const LABEL_16346 = 'component_16346';
export function Component16346({ value = 16346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16346, 'data-value': derived.doubled }, children);
}
export default Component16346;
