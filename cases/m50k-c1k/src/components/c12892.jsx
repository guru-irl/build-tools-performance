import React from 'react';
const LABEL_12892 = 'component_12892';
export function Component12892({ value = 12892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12892, 'data-value': derived.doubled }, children);
}
export default Component12892;
