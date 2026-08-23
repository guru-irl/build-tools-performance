import React from 'react';
const LABEL_18186 = 'component_18186';
export function Component18186({ value = 18186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18186, 'data-value': derived.doubled }, children);
}
export default Component18186;
