import React from 'react';
const LABEL_9202 = 'component_9202';
export function Component9202({ value = 9202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9202, 'data-value': derived.doubled }, children);
}
export default Component9202;
