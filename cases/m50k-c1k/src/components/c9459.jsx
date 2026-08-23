import React from 'react';
const LABEL_9459 = 'component_9459';
export function Component9459({ value = 9459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9459, 'data-value': derived.doubled }, children);
}
export default Component9459;
