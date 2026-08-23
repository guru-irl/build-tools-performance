import React from 'react';
const LABEL_9683 = 'component_9683';
export function Component9683({ value = 9683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9683, 'data-value': derived.doubled }, children);
}
export default Component9683;
