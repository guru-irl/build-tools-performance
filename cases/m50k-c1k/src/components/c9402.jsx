import React from 'react';
const LABEL_9402 = 'component_9402';
export function Component9402({ value = 9402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9402, 'data-value': derived.doubled }, children);
}
export default Component9402;
