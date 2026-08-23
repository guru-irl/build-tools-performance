import React from 'react';
const LABEL_9827 = 'component_9827';
export function Component9827({ value = 9827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9827, 'data-value': derived.doubled }, children);
}
export default Component9827;
