import React from 'react';
const LABEL_9942 = 'component_9942';
export function Component9942({ value = 9942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9942, 'data-value': derived.doubled }, children);
}
export default Component9942;
