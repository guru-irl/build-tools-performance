import React from 'react';
const LABEL_9751 = 'component_9751';
export function Component9751({ value = 9751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9751, 'data-value': derived.doubled }, children);
}
export default Component9751;
