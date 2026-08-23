import React from 'react';
const LABEL_7599 = 'component_7599';
export function Component7599({ value = 7599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7599, 'data-value': derived.doubled }, children);
}
export default Component7599;
