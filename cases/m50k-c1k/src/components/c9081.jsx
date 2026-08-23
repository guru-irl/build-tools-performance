import React from 'react';
const LABEL_9081 = 'component_9081';
export function Component9081({ value = 9081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9081, 'data-value': derived.doubled }, children);
}
export default Component9081;
