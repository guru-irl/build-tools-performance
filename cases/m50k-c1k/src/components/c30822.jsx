import React from 'react';
const LABEL_30822 = 'component_30822';
export function Component30822({ value = 30822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30822, 'data-value': derived.doubled }, children);
}
export default Component30822;
