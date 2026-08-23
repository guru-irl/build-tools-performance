import React from 'react';
const LABEL_17358 = 'component_17358';
export function Component17358({ value = 17358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17358, 'data-value': derived.doubled }, children);
}
export default Component17358;
