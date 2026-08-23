import React from 'react';
const LABEL_45668 = 'component_45668';
export function Component45668({ value = 45668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45668, 'data-value': derived.doubled }, children);
}
export default Component45668;
