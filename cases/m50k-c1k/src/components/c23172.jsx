import React from 'react';
const LABEL_23172 = 'component_23172';
export function Component23172({ value = 23172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23172, 'data-value': derived.doubled }, children);
}
export default Component23172;
