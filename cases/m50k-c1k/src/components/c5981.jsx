import React from 'react';
const LABEL_5981 = 'component_5981';
export function Component5981({ value = 5981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5981, 'data-value': derived.doubled }, children);
}
export default Component5981;
