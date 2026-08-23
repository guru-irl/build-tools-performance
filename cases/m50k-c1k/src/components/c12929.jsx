import React from 'react';
const LABEL_12929 = 'component_12929';
export function Component12929({ value = 12929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12929, 'data-value': derived.doubled }, children);
}
export default Component12929;
