import React from 'react';
const LABEL_9181 = 'component_9181';
export function Component9181({ value = 9181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9181, 'data-value': derived.doubled }, children);
}
export default Component9181;
