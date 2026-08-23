import React from 'react';
const LABEL_7528 = 'component_7528';
export function Component7528({ value = 7528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7528, 'data-value': derived.doubled }, children);
}
export default Component7528;
