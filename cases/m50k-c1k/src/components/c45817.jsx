import React from 'react';
const LABEL_45817 = 'component_45817';
export function Component45817({ value = 45817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45817, 'data-value': derived.doubled }, children);
}
export default Component45817;
