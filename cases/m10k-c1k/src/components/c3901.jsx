import React from 'react';
const LABEL_3901 = 'component_3901';
export function Component3901({ value = 3901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3901, 'data-value': derived.doubled }, children);
}
export default Component3901;
