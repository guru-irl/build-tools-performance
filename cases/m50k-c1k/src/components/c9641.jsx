import React from 'react';
const LABEL_9641 = 'component_9641';
export function Component9641({ value = 9641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9641, 'data-value': derived.doubled }, children);
}
export default Component9641;
