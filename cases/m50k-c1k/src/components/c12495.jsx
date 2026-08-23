import React from 'react';
const LABEL_12495 = 'component_12495';
export function Component12495({ value = 12495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12495, 'data-value': derived.doubled }, children);
}
export default Component12495;
