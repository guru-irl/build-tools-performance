import React from 'react';
const LABEL_22510 = 'component_22510';
export function Component22510({ value = 22510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22510, 'data-value': derived.doubled }, children);
}
export default Component22510;
