import React from 'react';
const LABEL_31089 = 'component_31089';
export function Component31089({ value = 31089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31089, 'data-value': derived.doubled }, children);
}
export default Component31089;
