import React from 'react';
const LABEL_9596 = 'component_9596';
export function Component9596({ value = 9596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9596, 'data-value': derived.doubled }, children);
}
export default Component9596;
