import React from 'react';
const LABEL_12202 = 'component_12202';
export function Component12202({ value = 12202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12202, 'data-value': derived.doubled }, children);
}
export default Component12202;
