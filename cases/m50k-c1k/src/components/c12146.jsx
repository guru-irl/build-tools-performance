import React from 'react';
const LABEL_12146 = 'component_12146';
export function Component12146({ value = 12146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12146, 'data-value': derived.doubled }, children);
}
export default Component12146;
