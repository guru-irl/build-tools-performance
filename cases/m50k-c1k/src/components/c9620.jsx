import React from 'react';
const LABEL_9620 = 'component_9620';
export function Component9620({ value = 9620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9620, 'data-value': derived.doubled }, children);
}
export default Component9620;
