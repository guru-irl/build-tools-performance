import React from 'react';
const LABEL_28914 = 'component_28914';
export function Component28914({ value = 28914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28914, 'data-value': derived.doubled }, children);
}
export default Component28914;
