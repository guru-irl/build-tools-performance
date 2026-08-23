import React from 'react';
const LABEL_9846 = 'component_9846';
export function Component9846({ value = 9846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9846, 'data-value': derived.doubled }, children);
}
export default Component9846;
