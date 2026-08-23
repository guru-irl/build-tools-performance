import React from 'react';
const LABEL_9968 = 'component_9968';
export function Component9968({ value = 9968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9968, 'data-value': derived.doubled }, children);
}
export default Component9968;
