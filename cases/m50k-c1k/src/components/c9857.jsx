import React from 'react';
const LABEL_9857 = 'component_9857';
export function Component9857({ value = 9857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9857, 'data-value': derived.doubled }, children);
}
export default Component9857;
