import React from 'react';
const LABEL_31831 = 'component_31831';
export function Component31831({ value = 31831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31831, 'data-value': derived.doubled }, children);
}
export default Component31831;
