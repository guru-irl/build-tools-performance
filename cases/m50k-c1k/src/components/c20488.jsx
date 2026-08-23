import React from 'react';
const LABEL_20488 = 'component_20488';
export function Component20488({ value = 20488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20488, 'data-value': derived.doubled }, children);
}
export default Component20488;
