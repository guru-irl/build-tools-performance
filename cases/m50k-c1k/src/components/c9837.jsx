import React from 'react';
const LABEL_9837 = 'component_9837';
export function Component9837({ value = 9837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9837, 'data-value': derived.doubled }, children);
}
export default Component9837;
