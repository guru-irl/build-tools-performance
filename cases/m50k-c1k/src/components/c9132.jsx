import React from 'react';
const LABEL_9132 = 'component_9132';
export function Component9132({ value = 9132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9132, 'data-value': derived.doubled }, children);
}
export default Component9132;
