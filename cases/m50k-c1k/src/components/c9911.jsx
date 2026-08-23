import React from 'react';
const LABEL_9911 = 'component_9911';
export function Component9911({ value = 9911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9911, 'data-value': derived.doubled }, children);
}
export default Component9911;
