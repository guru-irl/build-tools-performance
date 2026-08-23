import React from 'react';
const LABEL_12026 = 'component_12026';
export function Component12026({ value = 12026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12026, 'data-value': derived.doubled }, children);
}
export default Component12026;
