import React from 'react';
const LABEL_9301 = 'component_9301';
export function Component9301({ value = 9301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9301, 'data-value': derived.doubled }, children);
}
export default Component9301;
