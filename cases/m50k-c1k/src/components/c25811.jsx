import React from 'react';
const LABEL_25811 = 'component_25811';
export function Component25811({ value = 25811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25811, 'data-value': derived.doubled }, children);
}
export default Component25811;
