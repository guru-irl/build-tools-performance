import React from 'react';
const LABEL_45346 = 'component_45346';
export function Component45346({ value = 45346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45346, 'data-value': derived.doubled }, children);
}
export default Component45346;
