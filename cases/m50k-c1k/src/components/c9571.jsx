import React from 'react';
const LABEL_9571 = 'component_9571';
export function Component9571({ value = 9571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9571, 'data-value': derived.doubled }, children);
}
export default Component9571;
