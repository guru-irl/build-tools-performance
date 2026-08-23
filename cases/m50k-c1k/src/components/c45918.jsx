import React from 'react';
const LABEL_45918 = 'component_45918';
export function Component45918({ value = 45918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45918, 'data-value': derived.doubled }, children);
}
export default Component45918;
