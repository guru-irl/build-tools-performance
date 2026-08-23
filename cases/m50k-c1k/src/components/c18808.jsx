import React from 'react';
const LABEL_18808 = 'component_18808';
export function Component18808({ value = 18808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18808, 'data-value': derived.doubled }, children);
}
export default Component18808;
