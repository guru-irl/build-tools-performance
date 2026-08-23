import React from 'react';
const LABEL_11981 = 'component_11981';
export function Component11981({ value = 11981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11981, 'data-value': derived.doubled }, children);
}
export default Component11981;
