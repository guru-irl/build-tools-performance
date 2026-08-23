import React from 'react';
const LABEL_9232 = 'component_9232';
export function Component9232({ value = 9232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9232, 'data-value': derived.doubled }, children);
}
export default Component9232;
