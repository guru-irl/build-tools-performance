import React from 'react';
const LABEL_9221 = 'component_9221';
export function Component9221({ value = 9221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9221, 'data-value': derived.doubled }, children);
}
export default Component9221;
