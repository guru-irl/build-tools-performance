import React from 'react';
const LABEL_9315 = 'component_9315';
export function Component9315({ value = 9315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9315, 'data-value': derived.doubled }, children);
}
export default Component9315;
