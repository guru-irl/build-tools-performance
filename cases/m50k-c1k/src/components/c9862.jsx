import React from 'react';
const LABEL_9862 = 'component_9862';
export function Component9862({ value = 9862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9862, 'data-value': derived.doubled }, children);
}
export default Component9862;
