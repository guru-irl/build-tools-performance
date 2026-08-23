import React from 'react';
const LABEL_29692 = 'component_29692';
export function Component29692({ value = 29692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29692, 'data-value': derived.doubled }, children);
}
export default Component29692;
