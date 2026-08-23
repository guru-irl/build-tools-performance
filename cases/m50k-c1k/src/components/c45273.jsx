import React from 'react';
const LABEL_45273 = 'component_45273';
export function Component45273({ value = 45273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45273, 'data-value': derived.doubled }, children);
}
export default Component45273;
