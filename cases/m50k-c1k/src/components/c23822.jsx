import React from 'react';
const LABEL_23822 = 'component_23822';
export function Component23822({ value = 23822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23822, 'data-value': derived.doubled }, children);
}
export default Component23822;
