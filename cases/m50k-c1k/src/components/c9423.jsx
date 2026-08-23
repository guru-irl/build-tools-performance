import React from 'react';
const LABEL_9423 = 'component_9423';
export function Component9423({ value = 9423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9423, 'data-value': derived.doubled }, children);
}
export default Component9423;
