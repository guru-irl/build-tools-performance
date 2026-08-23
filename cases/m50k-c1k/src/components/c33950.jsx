import React from 'react';
const LABEL_33950 = 'component_33950';
export function Component33950({ value = 33950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33950, 'data-value': derived.doubled }, children);
}
export default Component33950;
