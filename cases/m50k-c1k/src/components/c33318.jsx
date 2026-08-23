import React from 'react';
const LABEL_33318 = 'component_33318';
export function Component33318({ value = 33318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33318, 'data-value': derived.doubled }, children);
}
export default Component33318;
