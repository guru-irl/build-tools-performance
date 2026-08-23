import React from 'react';
const LABEL_32346 = 'component_32346';
export function Component32346({ value = 32346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32346, 'data-value': derived.doubled }, children);
}
export default Component32346;
