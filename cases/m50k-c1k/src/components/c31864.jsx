import React from 'react';
const LABEL_31864 = 'component_31864';
export function Component31864({ value = 31864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31864, 'data-value': derived.doubled }, children);
}
export default Component31864;
