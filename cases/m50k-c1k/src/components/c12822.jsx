import React from 'react';
const LABEL_12822 = 'component_12822';
export function Component12822({ value = 12822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12822, 'data-value': derived.doubled }, children);
}
export default Component12822;
