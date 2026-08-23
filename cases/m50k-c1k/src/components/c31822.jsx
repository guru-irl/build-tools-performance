import React from 'react';
const LABEL_31822 = 'component_31822';
export function Component31822({ value = 31822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31822, 'data-value': derived.doubled }, children);
}
export default Component31822;
