import React from 'react';
const LABEL_23213 = 'component_23213';
export function Component23213({ value = 23213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23213, 'data-value': derived.doubled }, children);
}
export default Component23213;
