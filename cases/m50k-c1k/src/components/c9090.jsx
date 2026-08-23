import React from 'react';
const LABEL_9090 = 'component_9090';
export function Component9090({ value = 9090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9090, 'data-value': derived.doubled }, children);
}
export default Component9090;
