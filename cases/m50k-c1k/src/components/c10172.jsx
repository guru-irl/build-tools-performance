import React from 'react';
const LABEL_10172 = 'component_10172';
export function Component10172({ value = 10172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10172, 'data-value': derived.doubled }, children);
}
export default Component10172;
