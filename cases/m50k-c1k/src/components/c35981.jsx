import React from 'react';
const LABEL_35981 = 'component_35981';
export function Component35981({ value = 35981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35981, 'data-value': derived.doubled }, children);
}
export default Component35981;
