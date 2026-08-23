import React from 'react';
const LABEL_13346 = 'component_13346';
export function Component13346({ value = 13346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13346, 'data-value': derived.doubled }, children);
}
export default Component13346;
