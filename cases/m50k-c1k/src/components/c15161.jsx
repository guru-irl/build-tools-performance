import React from 'react';
const LABEL_15161 = 'component_15161';
export function Component15161({ value = 15161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15161, 'data-value': derived.doubled }, children);
}
export default Component15161;
