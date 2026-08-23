import React from 'react';
const LABEL_20503 = 'component_20503';
export function Component20503({ value = 20503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20503, 'data-value': derived.doubled }, children);
}
export default Component20503;
