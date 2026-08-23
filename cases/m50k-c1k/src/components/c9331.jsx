import React from 'react';
const LABEL_9331 = 'component_9331';
export function Component9331({ value = 9331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9331, 'data-value': derived.doubled }, children);
}
export default Component9331;
