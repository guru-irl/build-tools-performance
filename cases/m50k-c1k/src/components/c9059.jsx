import React from 'react';
const LABEL_9059 = 'component_9059';
export function Component9059({ value = 9059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9059, 'data-value': derived.doubled }, children);
}
export default Component9059;
