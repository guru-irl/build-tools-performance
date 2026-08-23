import React from 'react';
const LABEL_45726 = 'component_45726';
export function Component45726({ value = 45726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45726, 'data-value': derived.doubled }, children);
}
export default Component45726;
