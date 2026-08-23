import React from 'react';
const LABEL_23332 = 'component_23332';
export function Component23332({ value = 23332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23332, 'data-value': derived.doubled }, children);
}
export default Component23332;
