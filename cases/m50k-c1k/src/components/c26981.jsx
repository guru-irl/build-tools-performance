import React from 'react';
const LABEL_26981 = 'component_26981';
export function Component26981({ value = 26981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26981, 'data-value': derived.doubled }, children);
}
export default Component26981;
