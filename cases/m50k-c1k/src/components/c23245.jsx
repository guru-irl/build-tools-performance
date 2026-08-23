import React from 'react';
const LABEL_23245 = 'component_23245';
export function Component23245({ value = 23245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23245, 'data-value': derived.doubled }, children);
}
export default Component23245;
