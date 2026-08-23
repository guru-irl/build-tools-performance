import React from 'react';
const LABEL_37172 = 'component_37172';
export function Component37172({ value = 37172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37172, 'data-value': derived.doubled }, children);
}
export default Component37172;
