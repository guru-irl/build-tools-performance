import React from 'react';
const LABEL_31795 = 'component_31795';
export function Component31795({ value = 31795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31795, 'data-value': derived.doubled }, children);
}
export default Component31795;
