import React from 'react';
const LABEL_23229 = 'component_23229';
export function Component23229({ value = 23229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23229, 'data-value': derived.doubled }, children);
}
export default Component23229;
