import React from 'react';
const LABEL_9218 = 'component_9218';
export function Component9218({ value = 9218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9218, 'data-value': derived.doubled }, children);
}
export default Component9218;
