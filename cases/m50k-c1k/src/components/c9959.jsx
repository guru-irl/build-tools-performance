import React from 'react';
const LABEL_9959 = 'component_9959';
export function Component9959({ value = 9959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9959, 'data-value': derived.doubled }, children);
}
export default Component9959;
