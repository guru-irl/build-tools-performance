import React from 'react';
const LABEL_23411 = 'component_23411';
export function Component23411({ value = 23411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23411, 'data-value': derived.doubled }, children);
}
export default Component23411;
