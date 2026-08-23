import React from 'react';
const LABEL_25661 = 'component_25661';
export function Component25661({ value = 25661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25661, 'data-value': derived.doubled }, children);
}
export default Component25661;
