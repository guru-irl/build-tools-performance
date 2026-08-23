import React from 'react';
const LABEL_45224 = 'component_45224';
export function Component45224({ value = 45224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45224, 'data-value': derived.doubled }, children);
}
export default Component45224;
