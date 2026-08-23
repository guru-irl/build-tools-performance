import React from 'react';
const LABEL_12963 = 'component_12963';
export function Component12963({ value = 12963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12963, 'data-value': derived.doubled }, children);
}
export default Component12963;
