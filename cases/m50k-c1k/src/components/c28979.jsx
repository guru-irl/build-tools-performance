import React from 'react';
const LABEL_28979 = 'component_28979';
export function Component28979({ value = 28979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28979, 'data-value': derived.doubled }, children);
}
export default Component28979;
