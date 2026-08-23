import React from 'react';
const LABEL_9192 = 'component_9192';
export function Component9192({ value = 9192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9192, 'data-value': derived.doubled }, children);
}
export default Component9192;
