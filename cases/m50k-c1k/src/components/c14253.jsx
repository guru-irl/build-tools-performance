import React from 'react';
const LABEL_14253 = 'component_14253';
export function Component14253({ value = 14253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14253, 'data-value': derived.doubled }, children);
}
export default Component14253;
