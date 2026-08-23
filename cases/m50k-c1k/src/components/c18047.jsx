import React from 'react';
const LABEL_18047 = 'component_18047';
export function Component18047({ value = 18047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18047, 'data-value': derived.doubled }, children);
}
export default Component18047;
