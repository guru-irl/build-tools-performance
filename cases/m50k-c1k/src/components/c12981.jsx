import React from 'react';
const LABEL_12981 = 'component_12981';
export function Component12981({ value = 12981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12981, 'data-value': derived.doubled }, children);
}
export default Component12981;
