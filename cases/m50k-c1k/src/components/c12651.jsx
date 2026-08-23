import React from 'react';
const LABEL_12651 = 'component_12651';
export function Component12651({ value = 12651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12651, 'data-value': derived.doubled }, children);
}
export default Component12651;
