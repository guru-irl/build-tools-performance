import React from 'react';
const LABEL_9753 = 'component_9753';
export function Component9753({ value = 9753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9753, 'data-value': derived.doubled }, children);
}
export default Component9753;
