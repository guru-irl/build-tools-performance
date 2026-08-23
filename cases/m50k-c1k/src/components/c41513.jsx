import React from 'react';
const LABEL_41513 = 'component_41513';
export function Component41513({ value = 41513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41513, 'data-value': derived.doubled }, children);
}
export default Component41513;
