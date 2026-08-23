import React from 'react';
const LABEL_25213 = 'component_25213';
export function Component25213({ value = 25213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25213, 'data-value': derived.doubled }, children);
}
export default Component25213;
