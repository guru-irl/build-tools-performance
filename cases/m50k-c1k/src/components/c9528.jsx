import React from 'react';
const LABEL_9528 = 'component_9528';
export function Component9528({ value = 9528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9528, 'data-value': derived.doubled }, children);
}
export default Component9528;
