import React from 'react';
const LABEL_9329 = 'component_9329';
export function Component9329({ value = 9329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9329, 'data-value': derived.doubled }, children);
}
export default Component9329;
