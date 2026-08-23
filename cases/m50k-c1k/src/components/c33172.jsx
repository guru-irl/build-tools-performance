import React from 'react';
const LABEL_33172 = 'component_33172';
export function Component33172({ value = 33172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33172, 'data-value': derived.doubled }, children);
}
export default Component33172;
