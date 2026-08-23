import React from 'react';
const LABEL_9779 = 'component_9779';
export function Component9779({ value = 9779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9779, 'data-value': derived.doubled }, children);
}
export default Component9779;
