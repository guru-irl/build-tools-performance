import React from 'react';
const LABEL_12606 = 'component_12606';
export function Component12606({ value = 12606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12606, 'data-value': derived.doubled }, children);
}
export default Component12606;
