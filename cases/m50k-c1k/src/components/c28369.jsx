import React from 'react';
const LABEL_28369 = 'component_28369';
export function Component28369({ value = 28369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28369, 'data-value': derived.doubled }, children);
}
export default Component28369;
