import React from 'react';
const LABEL_31134 = 'component_31134';
export function Component31134({ value = 31134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31134, 'data-value': derived.doubled }, children);
}
export default Component31134;
