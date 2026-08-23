import React from 'react';
const LABEL_9870 = 'component_9870';
export function Component9870({ value = 9870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9870, 'data-value': derived.doubled }, children);
}
export default Component9870;
