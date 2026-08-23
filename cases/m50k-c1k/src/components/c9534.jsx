import React from 'react';
const LABEL_9534 = 'component_9534';
export function Component9534({ value = 9534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9534, 'data-value': derived.doubled }, children);
}
export default Component9534;
