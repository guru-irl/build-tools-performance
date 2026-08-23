import React from 'react';
const LABEL_35109 = 'component_35109';
export function Component35109({ value = 35109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35109, 'data-value': derived.doubled }, children);
}
export default Component35109;
