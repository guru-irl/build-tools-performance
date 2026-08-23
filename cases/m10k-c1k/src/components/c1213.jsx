import React from 'react';
const LABEL_1213 = 'component_1213';
export function Component1213({ value = 1213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1213, 'data-value': derived.doubled }, children);
}
export default Component1213;
