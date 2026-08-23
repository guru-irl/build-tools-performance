import React from 'react';
const LABEL_42605 = 'component_42605';
export function Component42605({ value = 42605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42605, 'data-value': derived.doubled }, children);
}
export default Component42605;
