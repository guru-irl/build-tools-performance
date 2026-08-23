import React from 'react';
const LABEL_9198 = 'component_9198';
export function Component9198({ value = 9198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9198, 'data-value': derived.doubled }, children);
}
export default Component9198;
