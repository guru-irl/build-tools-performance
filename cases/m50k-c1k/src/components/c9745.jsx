import React from 'react';
const LABEL_9745 = 'component_9745';
export function Component9745({ value = 9745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9745, 'data-value': derived.doubled }, children);
}
export default Component9745;
