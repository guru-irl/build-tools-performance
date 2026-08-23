import React from 'react';
const LABEL_9077 = 'component_9077';
export function Component9077({ value = 9077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9077, 'data-value': derived.doubled }, children);
}
export default Component9077;
