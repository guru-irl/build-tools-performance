import React from 'react';
const LABEL_38092 = 'component_38092';
export function Component38092({ value = 38092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38092, 'data-value': derived.doubled }, children);
}
export default Component38092;
