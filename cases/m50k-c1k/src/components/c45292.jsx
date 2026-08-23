import React from 'react';
const LABEL_45292 = 'component_45292';
export function Component45292({ value = 45292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45292, 'data-value': derived.doubled }, children);
}
export default Component45292;
