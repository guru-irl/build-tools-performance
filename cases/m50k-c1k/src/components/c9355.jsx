import React from 'react';
const LABEL_9355 = 'component_9355';
export function Component9355({ value = 9355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9355, 'data-value': derived.doubled }, children);
}
export default Component9355;
