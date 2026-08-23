import React from 'react';
const LABEL_21665 = 'component_21665';
export function Component21665({ value = 21665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21665, 'data-value': derived.doubled }, children);
}
export default Component21665;
