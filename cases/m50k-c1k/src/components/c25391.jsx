import React from 'react';
const LABEL_25391 = 'component_25391';
export function Component25391({ value = 25391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25391, 'data-value': derived.doubled }, children);
}
export default Component25391;
