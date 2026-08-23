import React from 'react';
const LABEL_1249 = 'component_1249';
export function Component1249({ value = 1249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1249, 'data-value': derived.doubled }, children);
}
export default Component1249;
