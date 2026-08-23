import React from 'react';
const LABEL_31346 = 'component_31346';
export function Component31346({ value = 31346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31346, 'data-value': derived.doubled }, children);
}
export default Component31346;
