import React from 'react';
const LABEL_9234 = 'component_9234';
export function Component9234({ value = 9234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9234, 'data-value': derived.doubled }, children);
}
export default Component9234;
