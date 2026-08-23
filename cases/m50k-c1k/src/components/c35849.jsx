import React from 'react';
const LABEL_35849 = 'component_35849';
export function Component35849({ value = 35849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35849, 'data-value': derived.doubled }, children);
}
export default Component35849;
