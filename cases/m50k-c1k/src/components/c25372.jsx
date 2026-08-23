import React from 'react';
const LABEL_25372 = 'component_25372';
export function Component25372({ value = 25372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25372, 'data-value': derived.doubled }, children);
}
export default Component25372;
