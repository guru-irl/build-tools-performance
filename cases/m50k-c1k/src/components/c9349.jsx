import React from 'react';
const LABEL_9349 = 'component_9349';
export function Component9349({ value = 9349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9349, 'data-value': derived.doubled }, children);
}
export default Component9349;
