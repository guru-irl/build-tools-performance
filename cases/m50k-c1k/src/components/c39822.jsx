import React from 'react';
const LABEL_39822 = 'component_39822';
export function Component39822({ value = 39822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39822, 'data-value': derived.doubled }, children);
}
export default Component39822;
