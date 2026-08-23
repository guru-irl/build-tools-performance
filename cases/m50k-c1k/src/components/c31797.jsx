import React from 'react';
const LABEL_31797 = 'component_31797';
export function Component31797({ value = 31797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31797, 'data-value': derived.doubled }, children);
}
export default Component31797;
