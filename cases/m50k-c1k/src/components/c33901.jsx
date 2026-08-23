import React from 'react';
const LABEL_33901 = 'component_33901';
export function Component33901({ value = 33901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33901, 'data-value': derived.doubled }, children);
}
export default Component33901;
