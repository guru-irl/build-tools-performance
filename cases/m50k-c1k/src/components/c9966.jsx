import React from 'react';
const LABEL_9966 = 'component_9966';
export function Component9966({ value = 9966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9966, 'data-value': derived.doubled }, children);
}
export default Component9966;
