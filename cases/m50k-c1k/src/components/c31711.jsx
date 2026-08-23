import React from 'react';
const LABEL_31711 = 'component_31711';
export function Component31711({ value = 31711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31711, 'data-value': derived.doubled }, children);
}
export default Component31711;
