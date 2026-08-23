import React from 'react';
const LABEL_25503 = 'component_25503';
export function Component25503({ value = 25503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25503, 'data-value': derived.doubled }, children);
}
export default Component25503;
