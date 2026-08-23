import React from 'react';
const LABEL_14794 = 'component_14794';
export function Component14794({ value = 14794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14794, 'data-value': derived.doubled }, children);
}
export default Component14794;
