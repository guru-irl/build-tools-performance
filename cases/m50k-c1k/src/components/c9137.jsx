import React from 'react';
const LABEL_9137 = 'component_9137';
export function Component9137({ value = 9137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9137, 'data-value': derived.doubled }, children);
}
export default Component9137;
