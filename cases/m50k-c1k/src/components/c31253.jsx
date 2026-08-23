import React from 'react';
const LABEL_31253 = 'component_31253';
export function Component31253({ value = 31253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31253, 'data-value': derived.doubled }, children);
}
export default Component31253;
