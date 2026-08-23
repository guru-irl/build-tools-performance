import React from 'react';
const LABEL_30253 = 'component_30253';
export function Component30253({ value = 30253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30253, 'data-value': derived.doubled }, children);
}
export default Component30253;
