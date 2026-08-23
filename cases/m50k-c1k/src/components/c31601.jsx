import React from 'react';
const LABEL_31601 = 'component_31601';
export function Component31601({ value = 31601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31601, 'data-value': derived.doubled }, children);
}
export default Component31601;
