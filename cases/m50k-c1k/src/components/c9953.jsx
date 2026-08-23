import React from 'react';
const LABEL_9953 = 'component_9953';
export function Component9953({ value = 9953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9953, 'data-value': derived.doubled }, children);
}
export default Component9953;
