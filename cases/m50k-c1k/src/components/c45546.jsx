import React from 'react';
const LABEL_45546 = 'component_45546';
export function Component45546({ value = 45546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45546, 'data-value': derived.doubled }, children);
}
export default Component45546;
