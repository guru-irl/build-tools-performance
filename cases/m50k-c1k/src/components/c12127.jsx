import React from 'react';
const LABEL_12127 = 'component_12127';
export function Component12127({ value = 12127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12127, 'data-value': derived.doubled }, children);
}
export default Component12127;
