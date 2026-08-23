import React from 'react';
const LABEL_15168 = 'component_15168';
export function Component15168({ value = 15168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15168, 'data-value': derived.doubled }, children);
}
export default Component15168;
