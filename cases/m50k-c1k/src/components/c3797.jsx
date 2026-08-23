import React from 'react';
const LABEL_3797 = 'component_3797';
export function Component3797({ value = 3797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3797, 'data-value': derived.doubled }, children);
}
export default Component3797;
