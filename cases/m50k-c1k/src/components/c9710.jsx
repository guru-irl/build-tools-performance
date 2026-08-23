import React from 'react';
const LABEL_9710 = 'component_9710';
export function Component9710({ value = 9710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9710, 'data-value': derived.doubled }, children);
}
export default Component9710;
