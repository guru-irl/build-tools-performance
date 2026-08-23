import React from 'react';
const LABEL_16981 = 'component_16981';
export function Component16981({ value = 16981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16981, 'data-value': derived.doubled }, children);
}
export default Component16981;
