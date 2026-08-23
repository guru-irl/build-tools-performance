import React from 'react';
const LABEL_9977 = 'component_9977';
export function Component9977({ value = 9977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9977, 'data-value': derived.doubled }, children);
}
export default Component9977;
