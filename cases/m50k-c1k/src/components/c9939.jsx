import React from 'react';
const LABEL_9939 = 'component_9939';
export function Component9939({ value = 9939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9939, 'data-value': derived.doubled }, children);
}
export default Component9939;
