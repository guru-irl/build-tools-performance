import React from 'react';
const LABEL_29178 = 'component_29178';
export function Component29178({ value = 29178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29178, 'data-value': derived.doubled }, children);
}
export default Component29178;
