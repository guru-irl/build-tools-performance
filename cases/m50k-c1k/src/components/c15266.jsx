import React from 'react';
const LABEL_15266 = 'component_15266';
export function Component15266({ value = 15266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15266, 'data-value': derived.doubled }, children);
}
export default Component15266;
