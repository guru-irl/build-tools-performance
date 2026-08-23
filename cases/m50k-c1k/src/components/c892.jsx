import React from 'react';
const LABEL_892 = 'component_892';
export function Component892({ value = 892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_892, 'data-value': derived.doubled }, children);
}
export default Component892;
