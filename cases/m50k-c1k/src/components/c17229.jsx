import React from 'react';
const LABEL_17229 = 'component_17229';
export function Component17229({ value = 17229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17229, 'data-value': derived.doubled }, children);
}
export default Component17229;
