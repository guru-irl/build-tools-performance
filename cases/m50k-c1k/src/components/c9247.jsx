import React from 'react';
const LABEL_9247 = 'component_9247';
export function Component9247({ value = 9247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9247, 'data-value': derived.doubled }, children);
}
export default Component9247;
