import React from 'react';
const LABEL_29432 = 'component_29432';
export function Component29432({ value = 29432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29432, 'data-value': derived.doubled }, children);
}
export default Component29432;
