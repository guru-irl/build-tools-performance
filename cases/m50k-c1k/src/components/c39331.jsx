import React from 'react';
const LABEL_39331 = 'component_39331';
export function Component39331({ value = 39331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39331, 'data-value': derived.doubled }, children);
}
export default Component39331;
