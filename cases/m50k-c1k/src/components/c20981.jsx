import React from 'react';
const LABEL_20981 = 'component_20981';
export function Component20981({ value = 20981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20981, 'data-value': derived.doubled }, children);
}
export default Component20981;
