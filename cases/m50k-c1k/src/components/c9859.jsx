import React from 'react';
const LABEL_9859 = 'component_9859';
export function Component9859({ value = 9859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9859, 'data-value': derived.doubled }, children);
}
export default Component9859;
