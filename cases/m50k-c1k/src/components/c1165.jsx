import React from 'react';
const LABEL_1165 = 'component_1165';
export function Component1165({ value = 1165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1165, 'data-value': derived.doubled }, children);
}
export default Component1165;
