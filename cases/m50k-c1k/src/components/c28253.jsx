import React from 'react';
const LABEL_28253 = 'component_28253';
export function Component28253({ value = 28253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28253, 'data-value': derived.doubled }, children);
}
export default Component28253;
