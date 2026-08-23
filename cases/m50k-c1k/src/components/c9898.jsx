import React from 'react';
const LABEL_9898 = 'component_9898';
export function Component9898({ value = 9898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9898, 'data-value': derived.doubled }, children);
}
export default Component9898;
