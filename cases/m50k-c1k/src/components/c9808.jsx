import React from 'react';
const LABEL_9808 = 'component_9808';
export function Component9808({ value = 9808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9808, 'data-value': derived.doubled }, children);
}
export default Component9808;
