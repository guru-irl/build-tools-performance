import React from 'react';
const LABEL_9970 = 'component_9970';
export function Component9970({ value = 9970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9970, 'data-value': derived.doubled }, children);
}
export default Component9970;
