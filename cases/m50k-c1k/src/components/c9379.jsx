import React from 'react';
const LABEL_9379 = 'component_9379';
export function Component9379({ value = 9379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9379, 'data-value': derived.doubled }, children);
}
export default Component9379;
