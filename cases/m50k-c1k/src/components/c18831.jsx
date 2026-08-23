import React from 'react';
const LABEL_18831 = 'component_18831';
export function Component18831({ value = 18831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18831, 'data-value': derived.doubled }, children);
}
export default Component18831;
