import React from 'react';
const LABEL_37981 = 'component_37981';
export function Component37981({ value = 37981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37981, 'data-value': derived.doubled }, children);
}
export default Component37981;
