import React from 'react';
const LABEL_22705 = 'component_22705';
export function Component22705({ value = 22705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22705, 'data-value': derived.doubled }, children);
}
export default Component22705;
