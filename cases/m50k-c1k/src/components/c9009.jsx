import React from 'react';
const LABEL_9009 = 'component_9009';
export function Component9009({ value = 9009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9009, 'data-value': derived.doubled }, children);
}
export default Component9009;
