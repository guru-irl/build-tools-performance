import React from 'react';
const LABEL_25981 = 'component_25981';
export function Component25981({ value = 25981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25981, 'data-value': derived.doubled }, children);
}
export default Component25981;
