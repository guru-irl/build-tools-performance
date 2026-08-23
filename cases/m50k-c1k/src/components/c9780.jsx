import React from 'react';
const LABEL_9780 = 'component_9780';
export function Component9780({ value = 9780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9780, 'data-value': derived.doubled }, children);
}
export default Component9780;
