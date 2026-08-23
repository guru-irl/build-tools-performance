import React from 'react';
const LABEL_9041 = 'component_9041';
export function Component9041({ value = 9041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9041, 'data-value': derived.doubled }, children);
}
export default Component9041;
