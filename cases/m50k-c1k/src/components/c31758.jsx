import React from 'react';
const LABEL_31758 = 'component_31758';
export function Component31758({ value = 31758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31758, 'data-value': derived.doubled }, children);
}
export default Component31758;
