import React from 'react';
const LABEL_42346 = 'component_42346';
export function Component42346({ value = 42346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42346, 'data-value': derived.doubled }, children);
}
export default Component42346;
