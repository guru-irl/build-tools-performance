import React from 'react';
const LABEL_7503 = 'component_7503';
export function Component7503({ value = 7503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7503, 'data-value': derived.doubled }, children);
}
export default Component7503;
