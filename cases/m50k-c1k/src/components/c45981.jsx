import React from 'react';
const LABEL_45981 = 'component_45981';
export function Component45981({ value = 45981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45981, 'data-value': derived.doubled }, children);
}
export default Component45981;
