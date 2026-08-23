import React from 'react';
const LABEL_31147 = 'component_31147';
export function Component31147({ value = 31147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31147, 'data-value': derived.doubled }, children);
}
export default Component31147;
