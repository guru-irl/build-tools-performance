import React from 'react';
const LABEL_18695 = 'component_18695';
export function Component18695({ value = 18695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18695, 'data-value': derived.doubled }, children);
}
export default Component18695;
