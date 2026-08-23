import React from 'react';
const LABEL_45343 = 'component_45343';
export function Component45343({ value = 45343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45343, 'data-value': derived.doubled }, children);
}
export default Component45343;
