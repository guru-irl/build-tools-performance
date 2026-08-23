import React from 'react';
const LABEL_25956 = 'component_25956';
export function Component25956({ value = 25956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25956, 'data-value': derived.doubled }, children);
}
export default Component25956;
