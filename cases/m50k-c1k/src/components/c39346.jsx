import React from 'react';
const LABEL_39346 = 'component_39346';
export function Component39346({ value = 39346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39346, 'data-value': derived.doubled }, children);
}
export default Component39346;
