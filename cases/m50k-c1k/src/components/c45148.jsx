import React from 'react';
const LABEL_45148 = 'component_45148';
export function Component45148({ value = 45148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45148, 'data-value': derived.doubled }, children);
}
export default Component45148;
