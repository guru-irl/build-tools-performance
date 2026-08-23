import React from 'react';
const LABEL_9992 = 'component_9992';
export function Component9992({ value = 9992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9992, 'data-value': derived.doubled }, children);
}
export default Component9992;
