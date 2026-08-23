import React from 'react';
const LABEL_32981 = 'component_32981';
export function Component32981({ value = 32981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32981, 'data-value': derived.doubled }, children);
}
export default Component32981;
