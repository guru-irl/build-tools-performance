import React from 'react';
const LABEL_9483 = 'component_9483';
export function Component9483({ value = 9483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9483, 'data-value': derived.doubled }, children);
}
export default Component9483;
