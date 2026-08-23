import React from 'react';
const LABEL_42356 = 'component_42356';
export function Component42356({ value = 42356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42356, 'data-value': derived.doubled }, children);
}
export default Component42356;
