import React from 'react';
const LABEL_9162 = 'component_9162';
export function Component9162({ value = 9162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9162, 'data-value': derived.doubled }, children);
}
export default Component9162;
