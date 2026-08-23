import React from 'react';
const LABEL_12646 = 'component_12646';
export function Component12646({ value = 12646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12646, 'data-value': derived.doubled }, children);
}
export default Component12646;
