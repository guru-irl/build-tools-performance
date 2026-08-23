import React from 'react';
const LABEL_10503 = 'component_10503';
export function Component10503({ value = 10503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10503, 'data-value': derived.doubled }, children);
}
export default Component10503;
