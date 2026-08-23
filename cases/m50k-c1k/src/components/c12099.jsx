import React from 'react';
const LABEL_12099 = 'component_12099';
export function Component12099({ value = 12099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12099, 'data-value': derived.doubled }, children);
}
export default Component12099;
