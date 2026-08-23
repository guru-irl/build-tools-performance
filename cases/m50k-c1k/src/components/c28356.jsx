import React from 'react';
const LABEL_28356 = 'component_28356';
export function Component28356({ value = 28356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28356, 'data-value': derived.doubled }, children);
}
export default Component28356;
