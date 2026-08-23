import React from 'react';
const LABEL_9702 = 'component_9702';
export function Component9702({ value = 9702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9702, 'data-value': derived.doubled }, children);
}
export default Component9702;
