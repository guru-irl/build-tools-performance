import React from 'react';
const LABEL_9826 = 'component_9826';
export function Component9826({ value = 9826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9826, 'data-value': derived.doubled }, children);
}
export default Component9826;
