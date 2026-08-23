import React from 'react';
const LABEL_30571 = 'component_30571';
export function Component30571({ value = 30571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30571, 'data-value': derived.doubled }, children);
}
export default Component30571;
