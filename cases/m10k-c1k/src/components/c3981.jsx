import React from 'react';
const LABEL_3981 = 'component_3981';
export function Component3981({ value = 3981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3981, 'data-value': derived.doubled }, children);
}
export default Component3981;
