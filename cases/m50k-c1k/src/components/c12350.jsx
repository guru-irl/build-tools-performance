import React from 'react';
const LABEL_12350 = 'component_12350';
export function Component12350({ value = 12350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12350, 'data-value': derived.doubled }, children);
}
export default Component12350;
