import React from 'react';
const LABEL_9089 = 'component_9089';
export function Component9089({ value = 9089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9089, 'data-value': derived.doubled }, children);
}
export default Component9089;
