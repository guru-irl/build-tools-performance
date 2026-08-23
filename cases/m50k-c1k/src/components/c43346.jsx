import React from 'react';
const LABEL_43346 = 'component_43346';
export function Component43346({ value = 43346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43346, 'data-value': derived.doubled }, children);
}
export default Component43346;
