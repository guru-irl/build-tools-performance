import React from 'react';
const LABEL_23901 = 'component_23901';
export function Component23901({ value = 23901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23901, 'data-value': derived.doubled }, children);
}
export default Component23901;
