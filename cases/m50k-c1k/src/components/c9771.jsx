import React from 'react';
const LABEL_9771 = 'component_9771';
export function Component9771({ value = 9771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9771, 'data-value': derived.doubled }, children);
}
export default Component9771;
