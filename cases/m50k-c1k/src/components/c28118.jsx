import React from 'react';
const LABEL_28118 = 'component_28118';
export function Component28118({ value = 28118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28118, 'data-value': derived.doubled }, children);
}
export default Component28118;
