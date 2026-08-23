import React from 'react';
const LABEL_31761 = 'component_31761';
export function Component31761({ value = 31761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31761, 'data-value': derived.doubled }, children);
}
export default Component31761;
