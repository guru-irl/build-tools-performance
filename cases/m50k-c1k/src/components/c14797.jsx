import React from 'react';
const LABEL_14797 = 'component_14797';
export function Component14797({ value = 14797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14797, 'data-value': derived.doubled }, children);
}
export default Component14797;
