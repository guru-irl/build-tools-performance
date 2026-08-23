import React from 'react';
const LABEL_9838 = 'component_9838';
export function Component9838({ value = 9838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9838, 'data-value': derived.doubled }, children);
}
export default Component9838;
