import React from 'react';
const LABEL_45145 = 'component_45145';
export function Component45145({ value = 45145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45145, 'data-value': derived.doubled }, children);
}
export default Component45145;
