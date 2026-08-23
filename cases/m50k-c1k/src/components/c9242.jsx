import React from 'react';
const LABEL_9242 = 'component_9242';
export function Component9242({ value = 9242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9242, 'data-value': derived.doubled }, children);
}
export default Component9242;
