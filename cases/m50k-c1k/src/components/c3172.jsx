import React from 'react';
const LABEL_3172 = 'component_3172';
export function Component3172({ value = 3172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3172, 'data-value': derived.doubled }, children);
}
export default Component3172;
