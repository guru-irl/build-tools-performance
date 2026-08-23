import React from 'react';
const LABEL_15901 = 'component_15901';
export function Component15901({ value = 15901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15901, 'data-value': derived.doubled }, children);
}
export default Component15901;
