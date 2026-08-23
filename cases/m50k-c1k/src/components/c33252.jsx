import React from 'react';
const LABEL_33252 = 'component_33252';
export function Component33252({ value = 33252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33252, 'data-value': derived.doubled }, children);
}
export default Component33252;
