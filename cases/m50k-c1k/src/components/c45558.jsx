import React from 'react';
const LABEL_45558 = 'component_45558';
export function Component45558({ value = 45558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45558, 'data-value': derived.doubled }, children);
}
export default Component45558;
