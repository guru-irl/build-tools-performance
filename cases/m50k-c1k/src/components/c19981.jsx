import React from 'react';
const LABEL_19981 = 'component_19981';
export function Component19981({ value = 19981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19981, 'data-value': derived.doubled }, children);
}
export default Component19981;
