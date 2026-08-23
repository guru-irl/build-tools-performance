import React from 'react';
const LABEL_346 = 'component_346';
export function Component346({ value = 346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_346, 'data-value': derived.doubled }, children);
}
export default Component346;
