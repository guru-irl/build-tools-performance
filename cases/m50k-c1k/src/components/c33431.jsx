import React from 'react';
const LABEL_33431 = 'component_33431';
export function Component33431({ value = 33431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33431, 'data-value': derived.doubled }, children);
}
export default Component33431;
