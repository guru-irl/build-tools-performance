import React from 'react';
const LABEL_45601 = 'component_45601';
export function Component45601({ value = 45601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45601, 'data-value': derived.doubled }, children);
}
export default Component45601;
