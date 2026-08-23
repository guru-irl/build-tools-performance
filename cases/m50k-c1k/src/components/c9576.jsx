import React from 'react';
const LABEL_9576 = 'component_9576';
export function Component9576({ value = 9576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9576, 'data-value': derived.doubled }, children);
}
export default Component9576;
