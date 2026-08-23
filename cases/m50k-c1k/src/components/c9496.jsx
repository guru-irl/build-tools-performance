import React from 'react';
const LABEL_9496 = 'component_9496';
export function Component9496({ value = 9496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9496, 'data-value': derived.doubled }, children);
}
export default Component9496;
