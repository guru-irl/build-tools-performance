import React from 'react';
const LABEL_9514 = 'component_9514';
export function Component9514({ value = 9514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9514, 'data-value': derived.doubled }, children);
}
export default Component9514;
