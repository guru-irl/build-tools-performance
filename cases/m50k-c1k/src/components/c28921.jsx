import React from 'react';
const LABEL_28921 = 'component_28921';
export function Component28921({ value = 28921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28921, 'data-value': derived.doubled }, children);
}
export default Component28921;
