import React from 'react';
const LABEL_28891 = 'component_28891';
export function Component28891({ value = 28891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28891, 'data-value': derived.doubled }, children);
}
export default Component28891;
