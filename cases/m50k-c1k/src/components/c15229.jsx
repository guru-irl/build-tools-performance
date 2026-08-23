import React from 'react';
const LABEL_15229 = 'component_15229';
export function Component15229({ value = 15229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15229, 'data-value': derived.doubled }, children);
}
export default Component15229;
