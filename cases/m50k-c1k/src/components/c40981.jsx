import React from 'react';
const LABEL_40981 = 'component_40981';
export function Component40981({ value = 40981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40981, 'data-value': derived.doubled }, children);
}
export default Component40981;
