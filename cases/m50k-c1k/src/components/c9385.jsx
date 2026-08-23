import React from 'react';
const LABEL_9385 = 'component_9385';
export function Component9385({ value = 9385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9385, 'data-value': derived.doubled }, children);
}
export default Component9385;
