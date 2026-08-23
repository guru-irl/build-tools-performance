import React from 'react';
const LABEL_33503 = 'component_33503';
export function Component33503({ value = 33503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33503, 'data-value': derived.doubled }, children);
}
export default Component33503;
