import React from 'react';
const LABEL_9426 = 'component_9426';
export function Component9426({ value = 9426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9426, 'data-value': derived.doubled }, children);
}
export default Component9426;
