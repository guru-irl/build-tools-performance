import React from 'react';
const LABEL_28531 = 'component_28531';
export function Component28531({ value = 28531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28531, 'data-value': derived.doubled }, children);
}
export default Component28531;
