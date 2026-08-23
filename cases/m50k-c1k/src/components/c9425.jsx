import React from 'react';
const LABEL_9425 = 'component_9425';
export function Component9425({ value = 9425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9425, 'data-value': derived.doubled }, children);
}
export default Component9425;
