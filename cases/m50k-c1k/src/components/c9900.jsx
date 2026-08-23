import React from 'react';
const LABEL_9900 = 'component_9900';
export function Component9900({ value = 9900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9900, 'data-value': derived.doubled }, children);
}
export default Component9900;
