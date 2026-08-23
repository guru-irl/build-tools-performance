import React from 'react';
const LABEL_31176 = 'component_31176';
export function Component31176({ value = 31176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31176, 'data-value': derived.doubled }, children);
}
export default Component31176;
