import React from 'react';
const LABEL_32898 = 'component_32898';
export function Component32898({ value = 32898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32898, 'data-value': derived.doubled }, children);
}
export default Component32898;
