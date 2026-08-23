import React from 'react';
const LABEL_7822 = 'component_7822';
export function Component7822({ value = 7822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7822, 'data-value': derived.doubled }, children);
}
export default Component7822;
