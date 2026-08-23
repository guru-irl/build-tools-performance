import React from 'react';
const LABEL_9111 = 'component_9111';
export function Component9111({ value = 9111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9111, 'data-value': derived.doubled }, children);
}
export default Component9111;
