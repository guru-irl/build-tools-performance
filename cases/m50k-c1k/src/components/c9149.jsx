import React from 'react';
const LABEL_9149 = 'component_9149';
export function Component9149({ value = 9149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9149, 'data-value': derived.doubled }, children);
}
export default Component9149;
