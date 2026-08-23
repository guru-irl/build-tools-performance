import React from 'react';
const LABEL_40099 = 'component_40099';
export function Component40099({ value = 40099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40099, 'data-value': derived.doubled }, children);
}
export default Component40099;
