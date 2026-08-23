import React from 'react';
const LABEL_9246 = 'component_9246';
export function Component9246({ value = 9246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9246, 'data-value': derived.doubled }, children);
}
export default Component9246;
