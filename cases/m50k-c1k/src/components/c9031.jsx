import React from 'react';
const LABEL_9031 = 'component_9031';
export function Component9031({ value = 9031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9031, 'data-value': derived.doubled }, children);
}
export default Component9031;
