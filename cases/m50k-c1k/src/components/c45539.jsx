import React from 'react';
const LABEL_45539 = 'component_45539';
export function Component45539({ value = 45539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45539, 'data-value': derived.doubled }, children);
}
export default Component45539;
