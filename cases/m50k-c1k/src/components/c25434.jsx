import React from 'react';
const LABEL_25434 = 'component_25434';
export function Component25434({ value = 25434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25434, 'data-value': derived.doubled }, children);
}
export default Component25434;
