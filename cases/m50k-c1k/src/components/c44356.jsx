import React from 'react';
const LABEL_44356 = 'component_44356';
export function Component44356({ value = 44356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44356, 'data-value': derived.doubled }, children);
}
export default Component44356;
