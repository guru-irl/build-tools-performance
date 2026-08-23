import React from 'react';
const LABEL_16962 = 'component_16962';
export function Component16962({ value = 16962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16962, 'data-value': derived.doubled }, children);
}
export default Component16962;
