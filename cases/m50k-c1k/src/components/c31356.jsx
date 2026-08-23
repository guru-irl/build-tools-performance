import React from 'react';
const LABEL_31356 = 'component_31356';
export function Component31356({ value = 31356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31356, 'data-value': derived.doubled }, children);
}
export default Component31356;
