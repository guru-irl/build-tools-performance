import React from 'react';
const LABEL_31817 = 'component_31817';
export function Component31817({ value = 31817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31817, 'data-value': derived.doubled }, children);
}
export default Component31817;
