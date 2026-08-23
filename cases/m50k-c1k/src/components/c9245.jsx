import React from 'react';
const LABEL_9245 = 'component_9245';
export function Component9245({ value = 9245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9245, 'data-value': derived.doubled }, children);
}
export default Component9245;
