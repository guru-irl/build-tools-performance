import React from 'react';
const LABEL_9822 = 'component_9822';
export function Component9822({ value = 9822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9822, 'data-value': derived.doubled }, children);
}
export default Component9822;
