import React from 'react';
const LABEL_28822 = 'component_28822';
export function Component28822({ value = 28822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28822, 'data-value': derived.doubled }, children);
}
export default Component28822;
