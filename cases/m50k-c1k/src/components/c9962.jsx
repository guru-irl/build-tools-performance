import React from 'react';
const LABEL_9962 = 'component_9962';
export function Component9962({ value = 9962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9962, 'data-value': derived.doubled }, children);
}
export default Component9962;
