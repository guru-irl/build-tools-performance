import React from 'react';
const LABEL_9411 = 'component_9411';
export function Component9411({ value = 9411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9411, 'data-value': derived.doubled }, children);
}
export default Component9411;
