import React from 'react';
const LABEL_12460 = 'component_12460';
export function Component12460({ value = 12460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12460, 'data-value': derived.doubled }, children);
}
export default Component12460;
