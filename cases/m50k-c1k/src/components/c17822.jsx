import React from 'react';
const LABEL_17822 = 'component_17822';
export function Component17822({ value = 17822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17822, 'data-value': derived.doubled }, children);
}
export default Component17822;
