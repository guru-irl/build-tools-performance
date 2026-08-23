import React from 'react';
const LABEL_9279 = 'component_9279';
export function Component9279({ value = 9279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9279, 'data-value': derived.doubled }, children);
}
export default Component9279;
