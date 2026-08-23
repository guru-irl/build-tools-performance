import React from 'react';
const LABEL_16158 = 'component_16158';
export function Component16158({ value = 16158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16158, 'data-value': derived.doubled }, children);
}
export default Component16158;
