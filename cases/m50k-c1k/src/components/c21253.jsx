import React from 'react';
const LABEL_21253 = 'component_21253';
export function Component21253({ value = 21253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21253, 'data-value': derived.doubled }, children);
}
export default Component21253;
