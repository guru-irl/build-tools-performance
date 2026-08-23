import React from 'react';
const LABEL_45761 = 'component_45761';
export function Component45761({ value = 45761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45761, 'data-value': derived.doubled }, children);
}
export default Component45761;
