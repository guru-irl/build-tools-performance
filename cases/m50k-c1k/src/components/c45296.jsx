import React from 'react';
const LABEL_45296 = 'component_45296';
export function Component45296({ value = 45296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45296, 'data-value': derived.doubled }, children);
}
export default Component45296;
