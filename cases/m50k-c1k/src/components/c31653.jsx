import React from 'react';
const LABEL_31653 = 'component_31653';
export function Component31653({ value = 31653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31653, 'data-value': derived.doubled }, children);
}
export default Component31653;
