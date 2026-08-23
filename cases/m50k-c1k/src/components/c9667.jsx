import React from 'react';
const LABEL_9667 = 'component_9667';
export function Component9667({ value = 9667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9667, 'data-value': derived.doubled }, children);
}
export default Component9667;
