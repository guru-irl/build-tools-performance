import React from 'react';
const LABEL_9389 = 'component_9389';
export function Component9389({ value = 9389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9389, 'data-value': derived.doubled }, children);
}
export default Component9389;
