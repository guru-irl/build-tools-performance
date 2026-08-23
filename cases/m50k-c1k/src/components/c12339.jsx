import React from 'react';
const LABEL_12339 = 'component_12339';
export function Component12339({ value = 12339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12339, 'data-value': derived.doubled }, children);
}
export default Component12339;
