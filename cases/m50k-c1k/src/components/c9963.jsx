import React from 'react';
const LABEL_9963 = 'component_9963';
export function Component9963({ value = 9963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9963, 'data-value': derived.doubled }, children);
}
export default Component9963;
