import React from 'react';
const LABEL_9388 = 'component_9388';
export function Component9388({ value = 9388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9388, 'data-value': derived.doubled }, children);
}
export default Component9388;
