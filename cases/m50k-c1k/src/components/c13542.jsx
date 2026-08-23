import React from 'react';
const LABEL_13542 = 'component_13542';
export function Component13542({ value = 13542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13542, 'data-value': derived.doubled }, children);
}
export default Component13542;
