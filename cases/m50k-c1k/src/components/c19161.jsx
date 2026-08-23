import React from 'react';
const LABEL_19161 = 'component_19161';
export function Component19161({ value = 19161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19161, 'data-value': derived.doubled }, children);
}
export default Component19161;
