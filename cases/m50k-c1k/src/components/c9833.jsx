import React from 'react';
const LABEL_9833 = 'component_9833';
export function Component9833({ value = 9833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9833, 'data-value': derived.doubled }, children);
}
export default Component9833;
