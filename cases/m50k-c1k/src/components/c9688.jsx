import React from 'react';
const LABEL_9688 = 'component_9688';
export function Component9688({ value = 9688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9688, 'data-value': derived.doubled }, children);
}
export default Component9688;
