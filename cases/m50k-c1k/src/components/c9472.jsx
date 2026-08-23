import React from 'react';
const LABEL_9472 = 'component_9472';
export function Component9472({ value = 9472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9472, 'data-value': derived.doubled }, children);
}
export default Component9472;
