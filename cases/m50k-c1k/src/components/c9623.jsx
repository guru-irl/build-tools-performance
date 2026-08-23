import React from 'react';
const LABEL_9623 = 'component_9623';
export function Component9623({ value = 9623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9623, 'data-value': derived.doubled }, children);
}
export default Component9623;
