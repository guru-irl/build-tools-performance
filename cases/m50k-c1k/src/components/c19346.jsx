import React from 'react';
const LABEL_19346 = 'component_19346';
export function Component19346({ value = 19346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19346, 'data-value': derived.doubled }, children);
}
export default Component19346;
