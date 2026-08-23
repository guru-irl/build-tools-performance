import React from 'react';
const LABEL_23146 = 'component_23146';
export function Component23146({ value = 23146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23146, 'data-value': derived.doubled }, children);
}
export default Component23146;
