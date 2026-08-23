import React from 'react';
const LABEL_9984 = 'component_9984';
export function Component9984({ value = 9984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9984, 'data-value': derived.doubled }, children);
}
export default Component9984;
