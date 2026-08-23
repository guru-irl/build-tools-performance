import React from 'react';
const LABEL_9025 = 'component_9025';
export function Component9025({ value = 9025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9025, 'data-value': derived.doubled }, children);
}
export default Component9025;
