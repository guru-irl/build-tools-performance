import React from 'react';
const LABEL_36503 = 'component_36503';
export function Component36503({ value = 36503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36503, 'data-value': derived.doubled }, children);
}
export default Component36503;
