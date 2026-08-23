import React from 'react';
const LABEL_9079 = 'component_9079';
export function Component9079({ value = 9079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9079, 'data-value': derived.doubled }, children);
}
export default Component9079;
