import React from 'react';
const LABEL_45160 = 'component_45160';
export function Component45160({ value = 45160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45160, 'data-value': derived.doubled }, children);
}
export default Component45160;
