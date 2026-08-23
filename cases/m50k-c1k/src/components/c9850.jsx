import React from 'react';
const LABEL_9850 = 'component_9850';
export function Component9850({ value = 9850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9850, 'data-value': derived.doubled }, children);
}
export default Component9850;
