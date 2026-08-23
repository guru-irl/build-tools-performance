import React from 'react';
const LABEL_22981 = 'component_22981';
export function Component22981({ value = 22981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22981, 'data-value': derived.doubled }, children);
}
export default Component22981;
