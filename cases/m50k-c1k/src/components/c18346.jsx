import React from 'react';
const LABEL_18346 = 'component_18346';
export function Component18346({ value = 18346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18346, 'data-value': derived.doubled }, children);
}
export default Component18346;
