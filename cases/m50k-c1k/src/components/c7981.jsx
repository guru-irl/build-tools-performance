import React from 'react';
const LABEL_7981 = 'component_7981';
export function Component7981({ value = 7981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7981, 'data-value': derived.doubled }, children);
}
export default Component7981;
