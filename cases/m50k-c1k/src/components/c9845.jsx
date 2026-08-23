import React from 'react';
const LABEL_9845 = 'component_9845';
export function Component9845({ value = 9845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9845, 'data-value': derived.doubled }, children);
}
export default Component9845;
