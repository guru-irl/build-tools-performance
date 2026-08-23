import React from 'react';
const LABEL_21981 = 'component_21981';
export function Component21981({ value = 21981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21981, 'data-value': derived.doubled }, children);
}
export default Component21981;
