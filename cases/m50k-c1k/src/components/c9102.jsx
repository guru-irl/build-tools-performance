import React from 'react';
const LABEL_9102 = 'component_9102';
export function Component9102({ value = 9102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9102, 'data-value': derived.doubled }, children);
}
export default Component9102;
