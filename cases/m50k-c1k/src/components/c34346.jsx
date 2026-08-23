import React from 'react';
const LABEL_34346 = 'component_34346';
export function Component34346({ value = 34346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34346, 'data-value': derived.doubled }, children);
}
export default Component34346;
