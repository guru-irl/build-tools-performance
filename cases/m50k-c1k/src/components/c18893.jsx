import React from 'react';
const LABEL_18893 = 'component_18893';
export function Component18893({ value = 18893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18893, 'data-value': derived.doubled }, children);
}
export default Component18893;
