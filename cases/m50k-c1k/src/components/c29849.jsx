import React from 'react';
const LABEL_29849 = 'component_29849';
export function Component29849({ value = 29849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29849, 'data-value': derived.doubled }, children);
}
export default Component29849;
