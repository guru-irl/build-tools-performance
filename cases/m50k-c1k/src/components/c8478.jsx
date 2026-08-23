import React from 'react';
const LABEL_8478 = 'component_8478';
export function Component8478({ value = 8478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8478, 'data-value': derived.doubled }, children);
}
export default Component8478;
