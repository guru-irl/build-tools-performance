import React from 'react';
const LABEL_9159 = 'component_9159';
export function Component9159({ value = 9159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9159, 'data-value': derived.doubled }, children);
}
export default Component9159;
