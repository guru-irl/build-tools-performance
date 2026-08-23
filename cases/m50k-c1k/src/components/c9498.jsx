import React from 'react';
const LABEL_9498 = 'component_9498';
export function Component9498({ value = 9498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9498, 'data-value': derived.doubled }, children);
}
export default Component9498;
