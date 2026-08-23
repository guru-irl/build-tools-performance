import React from 'react';
const LABEL_31281 = 'component_31281';
export function Component31281({ value = 31281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31281, 'data-value': derived.doubled }, children);
}
export default Component31281;
