import React from 'react';
const LABEL_29876 = 'component_29876';
export function Component29876({ value = 29876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29876, 'data-value': derived.doubled }, children);
}
export default Component29876;
