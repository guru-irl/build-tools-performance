import React from 'react';
const LABEL_37495 = 'component_37495';
export function Component37495({ value = 37495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37495, 'data-value': derived.doubled }, children);
}
export default Component37495;
