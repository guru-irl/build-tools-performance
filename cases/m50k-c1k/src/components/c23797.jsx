import React from 'react';
const LABEL_23797 = 'component_23797';
export function Component23797({ value = 23797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23797, 'data-value': derived.doubled }, children);
}
export default Component23797;
