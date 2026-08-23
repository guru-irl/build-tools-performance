import React from 'react';
const LABEL_30346 = 'component_30346';
export function Component30346({ value = 30346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30346, 'data-value': derived.doubled }, children);
}
export default Component30346;
