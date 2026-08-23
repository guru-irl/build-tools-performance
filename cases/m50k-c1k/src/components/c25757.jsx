import React from 'react';
const LABEL_25757 = 'component_25757';
export function Component25757({ value = 25757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25757, 'data-value': derived.doubled }, children);
}
export default Component25757;
