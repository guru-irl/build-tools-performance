import React from 'react';
const LABEL_31830 = 'component_31830';
export function Component31830({ value = 31830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31830, 'data-value': derived.doubled }, children);
}
export default Component31830;
