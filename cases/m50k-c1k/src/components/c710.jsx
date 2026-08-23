import React from 'react';
const LABEL_710 = 'component_710';
export function Component710({ value = 710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_710, 'data-value': derived.doubled }, children);
}
export default Component710;
