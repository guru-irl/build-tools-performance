import React from 'react';
const LABEL_14346 = 'component_14346';
export function Component14346({ value = 14346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14346, 'data-value': derived.doubled }, children);
}
export default Component14346;
