import React from 'react';
const LABEL_24346 = 'component_24346';
export function Component24346({ value = 24346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24346, 'data-value': derived.doubled }, children);
}
export default Component24346;
