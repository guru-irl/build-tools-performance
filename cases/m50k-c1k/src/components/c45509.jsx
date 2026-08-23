import React from 'react';
const LABEL_45509 = 'component_45509';
export function Component45509({ value = 45509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45509, 'data-value': derived.doubled }, children);
}
export default Component45509;
