import React from 'react';
const LABEL_31113 = 'component_31113';
export function Component31113({ value = 31113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31113, 'data-value': derived.doubled }, children);
}
export default Component31113;
