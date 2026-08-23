import React from 'react';
const LABEL_45876 = 'component_45876';
export function Component45876({ value = 45876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45876, 'data-value': derived.doubled }, children);
}
export default Component45876;
