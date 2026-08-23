import React from 'react';
const LABEL_15243 = 'component_15243';
export function Component15243({ value = 15243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15243, 'data-value': derived.doubled }, children);
}
export default Component15243;
