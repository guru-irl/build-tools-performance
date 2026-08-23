import React from 'react';
const LABEL_12939 = 'component_12939';
export function Component12939({ value = 12939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12939, 'data-value': derived.doubled }, children);
}
export default Component12939;
