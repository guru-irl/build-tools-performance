import React from 'react';
const LABEL_11172 = 'component_11172';
export function Component11172({ value = 11172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11172, 'data-value': derived.doubled }, children);
}
export default Component11172;
