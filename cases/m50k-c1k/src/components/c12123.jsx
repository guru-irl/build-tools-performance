import React from 'react';
const LABEL_12123 = 'component_12123';
export function Component12123({ value = 12123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12123, 'data-value': derived.doubled }, children);
}
export default Component12123;
