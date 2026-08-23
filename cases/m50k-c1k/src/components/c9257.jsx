import React from 'react';
const LABEL_9257 = 'component_9257';
export function Component9257({ value = 9257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9257, 'data-value': derived.doubled }, children);
}
export default Component9257;
