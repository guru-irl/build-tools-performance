import React from 'react';
const LABEL_7172 = 'component_7172';
export function Component7172({ value = 7172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7172, 'data-value': derived.doubled }, children);
}
export default Component7172;
