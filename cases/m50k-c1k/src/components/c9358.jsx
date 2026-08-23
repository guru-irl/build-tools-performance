import React from 'react';
const LABEL_9358 = 'component_9358';
export function Component9358({ value = 9358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9358, 'data-value': derived.doubled }, children);
}
export default Component9358;
