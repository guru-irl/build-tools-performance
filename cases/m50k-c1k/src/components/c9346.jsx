import React from 'react';
const LABEL_9346 = 'component_9346';
export function Component9346({ value = 9346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9346, 'data-value': derived.doubled }, children);
}
export default Component9346;
