import React from 'react';
const LABEL_23253 = 'component_23253';
export function Component23253({ value = 23253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23253, 'data-value': derived.doubled }, children);
}
export default Component23253;
