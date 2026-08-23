import React from 'react';
const LABEL_25144 = 'component_25144';
export function Component25144({ value = 25144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25144, 'data-value': derived.doubled }, children);
}
export default Component25144;
